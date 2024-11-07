import React, { useContext, useEffect, useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { setLS, storedCartList, storedWishList } from "./dashboardCart";
import { ProductContext } from "../Home/Home";
import { BsSortNumericDownAlt } from "react-icons/bs";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import modalImg from "../../assets/modal.png";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  document.title = "Dashboard| Gadget Heaven";
  const allProduct = useContext(ProductContext);

  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    if (allProduct.length > 0) {
      const storedCartId = storedCartList();
      const newCart = [];
      for (const id of storedCartId) {
        const cartProduct = allProduct.find((product) => product.id == id);
        newCart.push(cartProduct);
        setCartProduct(newCart);
      }
    }
  }, [allProduct]);

  const [btnStyle, setBtnStyle] = useState(true);
  const btnStyleHandler = (params) => {
    setBtnStyle(params);
  };

  const [totalCost, setTotalCost] = useState([]);
  useEffect(() => {
    const prices = [];
    cartProduct.map((product) => prices.push(product.price));
    const totalPrice = prices.reduce((a, c) => a + c, 0);
    setTotalCost(parseFloat(totalPrice.toFixed(2)));
  }, [cartProduct]);

  const sortDescending = () => {
    const sortedCart = [...cartProduct].sort((a, b) => b.price - a.price);
    setCartProduct(sortedCart);
  };
  const purchaseHandler = () => {
    setCartProduct([]);
    localStorage.setItem("cart", []);
  };

  // Wishlist
  const cartHandler = (id) => {
    setLS(id);
  };

  const [wishlistProduct, setWishlist] = useState([]);
  useEffect(() => {
    if (allProduct.length > 0) {
      const storedCartId = storedWishList();
      const newCart = [];
      for (const id of storedCartId) {
        const cartProduct = allProduct.find((product) => product.id == id);
        newCart.push(cartProduct);
        setWishlist(newCart);
      }
    }
  }, [allProduct]);
const navigate = useNavigate()
const navigateHome = ()=>{
  navigate('/')
}


  return (
    <div>
      <div className="bg-primary relative">
        <section className="text-center text-white pb-6">
          <h1 className="text-3xl font-bold  pt-5 mb-4">Dashboard</h1>
          <p className="w-4/6 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={() => btnStyleHandler(true)}
              className={`${
                btnStyle ? "activeBtn" : "bg-transparent"
              } px-12 py-2 rounded-full border text-lg btn`}
            >
              Cart
            </button>
            <button
              onClick={() => btnStyleHandler(false)}
              className={`${
                !btnStyle ? "activeBtn" : "bg-transparent"
              } px-12 py-2 rounded-full border text-lg btn `}
            >
              Wishlist
            </button>
          </div>
        </section>
      </div>

      {btnStyle ? (
        <section className="w-10/12 mx-auto my-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="flex justify-end items-center gap-6 ">
              <h1 className="text-2xl font-bold">Total Cost: {totalCost}</h1>
              <div className="detailsBtn rounded-full hover:bg-primary/20">
                <button
                  onClick={sortDescending}
                  className="bg-white hover:text-white px-6 py-2 rounded-full border text-lg btn hover:bg-primary/20 border-none"
                >
                  Sort by Price{" "}
                  <span className="text-xl">
                    <BsSortNumericDownAlt />
                  </span>
                </button>
              </div>
              <button disabled={totalCost == 0 ? true : false}
                onClick={() => {
                  document.getElementById("my_modal_1").showModal()}}
                className="text-white bg-gradient-to-b from-[#9538E2] via-[#d20eec] to-[#ce50f1ce] px-6 py-2 rounded-full border text-lg btn hover:bg-primary/20"
              >
                Purchase
              </button>
            </div>
          </div>

          {/* Product Section part */}
          {}
          <div className="space-y-4 mt-8">
            {cartProduct.map(
              (product) =>
                product && (
                  <div className="grid grid-cols-[1fr_3fr_1fr] items-center bg-white rounded-2xl p-8 gap-6">
                    <div>
                      <img
                        className="rounded-xl"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-2xl font-bold">{product.title}</p>
                      <p className="text-lg text-darkGray">
                        {product.description}
                      </p>
                      <p className="text-xl font-bold">
                        Price: ${product.price}
                      </p>
                    </div>
                    <div className="text-3xl hover:cursor-pointer text-red-600 font-extrabold justify-self-end self-start">
                      <IoMdRemoveCircleOutline />
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box flex flex-col items-center">
              <img className="w-16 h-full mt-4" src={modalImg} alt="" />
              <p className="py-4 text-2xl font-bold">Payment Successfull !</p>
              <p className="font-bold text-darkGray mb-2">
                Thanks for purchasing.
              </p>
              <p className="font-bold text-darkGray">Total:{totalCost}</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                 
              <button onClick={()=>{navigateHome(),  purchaseHandler()}} className="btn w-full">Close</button>             
                </form>
              </div>
            </div>
          </dialog>
        </section>
      ) : (
        <section className="w-10/12 mx-auto my-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Wishlist</h1>
            <div className="flex justify-end items-center gap-6 "></div>
          </div>

          {/* Product Section part */}
          {}
          <div className="space-y-4 mt-8">
            {wishlistProduct.map(
              (product) =>
                product && (
                  <div className="grid grid-cols-[1fr_3fr_1fr] items-center bg-white rounded-2xl p-8 gap-6">
                    <div>
                      <img
                        className="rounded-xl"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-2xl font-bold">{product.title}</p>
                      <p className="text-lg text-darkGray">
                        {product.description}
                      </p>
                      <p className="text-xl font-bold">
                        Price: ${product.price}
                      </p>
                      <button
                        onClick={() => cartHandler(id)}
                        className="flex items-center gap-2 bg-[#9538E2] px-6 py-2 font-bold text-white rounded-full"
                      >
                        Add to Cart
                        <span className="text-xl">
                          <FiShoppingCart />
                        </span>
                      </button>
                    </div>
                    <div className="text-3xl hover:cursor-pointer text-red-600 font-extrabold justify-self-end self-start">
                      <IoMdRemoveCircleOutline />
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box flex flex-col items-center">
              <img className="w-16 h-full mt-4" src={modalImg} alt="" />
              <p className="py-4 text-2xl font-bold">Payment Successfull !</p>
              <p className="font-bold text-darkGray mb-2">
                Thanks for purchasing.
              </p>
              <p className="font-bold text-darkGray">Total:{totalCost}</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn w-full">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
