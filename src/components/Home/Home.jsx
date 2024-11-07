import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext("");
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const routTxt = useLocation().pathname
  return (
    <div className="max-w-7xl mx-auto font-sora">
      <div className="bg-[#F7F7F7] pb-10">
        <ProductContext.Provider value={products}>
          <Navbar routTxt={routTxt}></Navbar>
          <div className="min-h-[calc(100vh-500px)] z-0">
            <Outlet />
          </div>
        </ProductContext.Provider>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
