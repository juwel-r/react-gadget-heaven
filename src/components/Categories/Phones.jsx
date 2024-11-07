import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Home/Home";
import { PiSmileySadBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Phones = () => {
  const p = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
const phones = p.filter(phone=> phone.category === 'Phone')

    setProducts(phones);
  }, [products]);

  return products.length ? (
    <div className="p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl p-4">
          <div>
            <img
              className="rounded-xl border border-gray-200 p-1"
              src={product.image}
              alt=""
            />
          </div> 
          <h1 className="text-xl font-bold mt-4">{product.title}</h1>
          <p className="text-darkGray font-medium my-2">
            Price: ${product.price}
          </p>
          <div className="detailsBtn rounded-full w-min">
            <NavLink to={`/product-details/${product.id}`}>
              {" "}
              <button className="bg-white text-primary w-full rounded-full px-4">
                Details
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-3xl text-darkGray font-bold text-center mt-10 flex flex-col justify-center items-center gap-4 border-2 border-primary p-10 rounded-3xl">
      {" "}
      <p className="flex gap-6 text-5xl text-primary">
        Sorry! <PiSmileySadBold />
      </p>
      <p>This item is not available right now.</p>
    </div>
  );
};

export default Phones;
