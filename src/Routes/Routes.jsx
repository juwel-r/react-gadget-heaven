import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/Pages/ErrorPage";
import Dashboard from "../components/Pages/Dashboard";
import Statistics from "../components/Pages/Statistics";
import Banner from "../components/Home/Banner";
import RefundPolicy from "../components/Pages/RefundPolicy";
import MainPage from "../components/Home/MainPage";
import Products from "../components/Pages/Products";
import Product from "../components/Pages/Product";
import Phones from "../components/Categories/Phones";
import Laptop from "../components/Categories/Laptop";
import Watch from "../components/Categories/Watch";
import Accessories from "../components/Categories/Accessories";
import Others from "../components/Categories/Others";
import ProductsDetails from "../components/Pages/ProductsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <MainPage></MainPage>,
        children: [
          {
            path: "/",
            element: <Products></Products>,
            children: [
              {
                path: "/",
                element: <Product></Product>,
              },
              {
                path:"/phone",
                element:<Phones></Phones>
              },
              {
                path:"/laptop",
                element:<Laptop></Laptop>
              },
              {
                path:"/watch",
                element:<Watch></Watch>
              },
              {
                path:"/accessories",
                element:<Accessories></Accessories>
              },
              {
                path:"/others",
                element:<Others></Others>
              },
            ],
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/wishlist",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy></RefundPolicy>,
      },
      {
        path:'/product-details/:pId',
        element:<ProductsDetails></ProductsDetails>
      }
    ],
  },
]);

export default router;
