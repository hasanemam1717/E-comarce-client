import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
// import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu3Line size={24} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink className=" font-semibold " to="/">
              Home
            </NavLink>
            <li>
              <h1 className="text-xl font-bold">Pages</h1>
              <ul className="p-2 flex flex-col gap-2">
                <NavLink className=" font-semibold " to="/featuredProducts">
                  Featured Products
                </NavLink>
                <NavLink className=" font-semibold " to="/testimonials">
                  Testimonials
                </NavLink>
                <NavLink className=" font-semibold " to="/categories">
                  Categories
                </NavLink>
              </ul>
            </li>
            <NavLink className=" font-semibold " to="/contact">
              Contact
            </NavLink>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold">TrendLoop</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 items-center justify-center">
          <NavLink className="text-xl font-semibold " to="/">
            Home
          </NavLink>
          <NavLink className="text-xl font-semibold " to="/featuredProducts">
            Featured Products
          </NavLink>
          <NavLink className="text-xl font-semibold " to="/testimonials">
            Testimonials
          </NavLink>
          <NavLink className="text-xl font-semibold " to="/categories">
            Categories
          </NavLink>
          <NavLink className="text-xl font-semibold " to="/contact">
            Contact
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <Dropdown></Dropdown> */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
          {/* Login Button */}
          <NavLink to="/logIn" className="px-6 py-3 bg-orange-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 w-full sm:w-auto">
            Log In
          </NavLink>

          {/* Register Button */}
          <NavLink to="/register" className="px-6 py-3 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg shadow-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:outline-none transition duration-200 w-full sm:w-auto">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
