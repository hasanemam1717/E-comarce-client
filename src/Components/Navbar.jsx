import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

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
                <NavLink
                  className=" font-semibold "
                  to="/featuredProducts"
                >
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
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
