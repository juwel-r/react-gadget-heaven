import React, { createContext, useEffect, useState } from "react";
import Banner from "./Banner";
import Products from "../Pages/Products";
import { Outlet, useLoaderData } from "react-router-dom";

const MainPage = () => {

  return (
    <div>
        <Banner></Banner>
        <Outlet></Outlet>
    </div>
  );
};

export default MainPage;
