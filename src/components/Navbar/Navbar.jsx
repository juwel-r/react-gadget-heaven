import { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { StoredCartListContext, StoredWishListContext } from "../Home/Home";

//npm install @react-icons/all-files --save ====>>install react icons

const Navbar = ({ routTxt }) => {
  const [open, setOpen] = useState(true);
  const menuHandler = () => {
    setOpen(!open);
  };
  const [navBg, setNavBg] = useState(true);
  // const navBgHandler = (boolean) => {
  //   setNavBg(boolean);
  // };
  const routeLocation = routTxt;
  useEffect(() => {
    if (
      routTxt === "/" ||
      routTxt === "/phone" ||
      routTxt === "/laptop" ||
      routTxt === "/accessories" ||
      routTxt === "/others" ||
      routTxt === "/watch"
    ) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  },[routTxt]);

  const [storedCartList] = useContext(StoredCartListContext);
  const [storedWishlist2] = useContext(StoredWishListContext);

  return (
    <div
      className={`w-11/12 mx-auto mt-6 ${
        navBg
          ? "border-r border-l border-t rounded-t-3xl border-primary/50 p-1 pb-0"
          : ""
      }`}
    >
      <div
        className={`navbar items-center p-4 mx-auto md:px-10 ${
          navBg ? "bg-primary rounded-t-3xl text-white" : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden h-min p-0"
            >
              <div onClick={menuHandler} className="text-2xl">
                <IoMenu />
              </div>
            </div>
            {!open ? (
              <div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content backdrop-blur-sm bg-primary/30 rounded-md z-[1] mt-3 w-52 p-2 shadow"
                >
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/statistics">Statistics</NavLink>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <NavLink to="/refund-policy">Refund Policy</NavLink>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <Link to="/">
            <p className="ml-3 text-xl font-bold text-dark text-nowrap hover:cursor-pointer">
              Gadget Heaven
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div
            id="nav-ul"
            className="nav-ul menu menu-horizontal font-semibold"
          >
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
            <NavLink to="/dashboard">
              <p>Dashboard</p>
            </NavLink>
            <NavLink to="/statistics">
              <p>Statistics</p>
            </NavLink>
            <NavLink to="/refund-policy">
              <p>Refund Policy</p>
            </NavLink>
          </div>
        </div>
        <div className={`navbar-end ${navBg ? "text-black" : ""}`}>
          <p className="p-1 md:p-3 border-2 bg-gray-50 rounded-full relative">
            <Link to="/dashboard">
              <FiShoppingCart />
              <span className={`absolute md:h-[20px] h-[15px] w-[15px] md:w-[20px] flex justify-center items-center rounded-full text-[12px] md:text-sm text-darkGray font-semibold md:-top-[20%] -top-[30%] md:right-[0%] -right-[20%] bg-gray-100 ${storedCartList < 1 ? "hidden" : ""}`}>{storedCartList == 0 ? '' : storedCartList.length}</span>
            </Link>
          </p>
          <p className="p-1 md:p-3 border-2 bg-gray-50 rounded-full ml-2 md:ml-4 relative">
            <Link to="/dashboard/wishlist">
              <MdFavoriteBorder />
              <span className={`absolute md:h-[20px] h-[15px] w-[15px] md:w-[20px] flex justify-center items-center rounded-full text-[12px] md:text-sm text-darkGray font-semibold md:-top-[20%] -top-[30%] md:right-[0%] -right-[20%] bg-gray-100 ${storedWishlist2 < 1 ? "hidden" : ""}`}>{storedWishlist2 == 0 ? '' : storedWishlist2.length}</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
