import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { setLS, setWishLS, storedWishList } from "./dashboardCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductsDetails = () => {
  document.title = "Product Details | Gadget Heaven";
  const { pId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.find((p) => p.id == pId)));
  }, [pId]);

  const {
    id,
    title,
    image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = products || {};

  const cartHandler = (id) => {
    setLS(id);
  };

  const [isDisabled, setDisabled] = useState(false);
  const wishlistHandler = (id) => {
    const storedList = storedWishList();
    const thisId = storedList.find((p) => p === id);
    if (thisId) {
      notifyWarn();
      setDisabled(true);
    } else {
      setWishLS(id);
      notifyW();
      setDisabled(true);
    }
  };

  const notify = () =>
    toast.success("Successfully Added to Cart!", {
      position: "top-center",
      autoClose: 3000,
    });

  const notifyW = () =>
    toast.success("Successfully Added to Wishlist!", {
      position: "top-center",
      autoClose: 3000,
    });

  const notifyWarn = () =>
    toast.warn("Already Added in Wishlist!", {
      position: "top-center",
      autoClose: 3000,
    });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const starsArray = Array(5).fill(<FaRegStar />);

    for (let i = 0; i < fullStars; i++) {
      starsArray[i] = <FaStar />;
    }
    if (halfStar) {
      starsArray[fullStars] = <FaStarHalfAlt />;
    }
    return starsArray;
  };

  return (
    <div>
      <div className="bg-primary relative">
        <div className="text-center text-white pb-64 md:pb-40">
          <h1 className="text-3xl font-bold  pt-5 mb-4">Product Details</h1>
          <p className="w-4/6 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="bg-white grid md:grid-cols-[2fr_3fr] p-6 w-9/12 mx-auto items-center rounded-3xl absolute right-[12%] top-[44%] md:top-[50%] border gap-4 md:gap-0">
          <div className="">
            <img className="rounded-xl w-full" src={image} alt={title} />
          </div>
          <div className="ml-8 text-darkGray space-y-2">
            <h1 className="text-2xl font-semibold text-black">{title}</h1>
            <h2 className="text-xl font-semibold text-black">
              Price: ${price}
            </h2>
            <div className="bg-secondery/10 w-fit px-3 py-1 rounded-full font-bold text-secondery">
              {availability ? <p>In Stock</p> : <p>Out of Stock</p>}
            </div>
            <p>{description}</p>
            <ul>
              <span className="text-black font-bold">Specification:</span>
              {specification ? (
                specification.map((spec, index) => <li key={index}>{spec}</li>)
              ) : (
                <p>No specifications available.</p>
              )}
            </ul>
            <p className="text-black font-bold">Rating</p>
            <div className="flex gap-1 text-yellow-600 items-center">
              {renderStars(rating).map((star, index) => (
                <span key={index}>{star}</span>
              ))}
              <span className="ml-2 text-black bg-gray-200 px-2 rounded-full">
                {rating}
              </span>
            </div>
            <div className="flex justify-start items-center gap-4">
              <button
                onClick={() => {
                  cartHandler(id);
                  notify();
                }}
                className="btn hover:bg-primary/70 transition-all duration-200 flex items-center gap-2 bg-[#9538E2] px-6 py-2 font-bold text-white rounded-full"
              >
                Add to Cart
              </button>
              <button
                onClick={() => wishlistHandler(id)}
                disabled={isDisabled}
                className="btn w-12 hover:bg-gray-300 transition-all duration-200 text-xl rounded-full border"
              >
                <span className="text-xl font-extrabold">
                  <MdFavoriteBorder />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-36 py-40"></div>
      <ToastContainer />
    </div>
  );
};

export default ProductsDetails;
