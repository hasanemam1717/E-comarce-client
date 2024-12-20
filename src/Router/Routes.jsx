import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Testimonial from "../Pages/Testimonials/Testimonial";
import Categories from "../Pages/Categories/Categories";
import Contact from "../Pages/Contact/Contact";
import Register from "../Pages/Authentication/Register";
import LogIn from "../Pages/Authentication/LogIn";
import About from "../Pages/About/About";
import Wishlist from "../Components/Wishlist";
import Dashboard from "../Dashboard/Dashboard";
import DashCart from "../Dashboard/DashCart";
import AllUser from "../Components/DashboardComponent/Seller/AllUser";
import ManageUser from "../Dashboard/ManageUser";
import PrivateRoute from "./PrivateRoute";
import Products from "../Pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/testimonials",
        element: <Testimonial></Testimonial>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/cart",
        element: <DashCart></DashCart>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUser></AllUser>,
      },
      {
        path: "/dashboard/manageuser",
        element: <ManageUser></ManageUser>,
      },
    ],
  },
]);
