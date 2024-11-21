import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Testimonial from "../Pages/Testimonials/Testimonial";
import FeaturedProducts from "../Pages/FeaturedProducts/FeaturedProducts";
import Categories from "../Pages/Categories/Categories";
import Contact from "../Pages/Contact/Contact";
import Register from "../Pages/Authentication/Register";
import LogIn from "../Pages/Authentication/LogIn";
import About from "../Pages/About/About";
import Wishlist from "../Components/Wishlist";

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
        path: "/featuredProducts",
        element: <FeaturedProducts></FeaturedProducts>,
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
      },{
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
]);
