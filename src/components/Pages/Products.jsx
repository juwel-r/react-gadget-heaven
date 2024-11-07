import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Home/Home";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  const p = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(p);
  }, [products]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="pt-28 md:pt-40 lg:pt-48 xl:pt-80 w-10/12 mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pb-8">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-[1fr_4fr] gap-6">
        <div className="flex flex-col w-full bg-white h-fit gap-4 p-6 rounded-2xl">
          {categories.map((cat) => (
            <div key={cat.id}>
              <NavLink onClick={""} to={`${cat.path}`}>
                <button className="text-left text-nowrap font-semibold text-darkGray rounded-full bg-gray-100 px-6 pr-8 py-3 w-full">
                  {" "}
                  {cat.name}
                </button>
              </NavLink>
            </div>
          ))}
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Products;
