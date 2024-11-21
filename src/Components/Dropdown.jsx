import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout functionality here
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className="inline-flex gap-3 items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
      >
        <span className="hidden lg:flex"> Options</span>
        <IoIosArrowDropdown size={24} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 sm:w-56"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {/* Dashboard Button */}
            <a
              href="/dashboard"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-indigo-500 hover:text-white transition duration-200 ease-in-out"
              role="menuitem"
            >
              Dashboard
            </a>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-red-500 hover:text-white transition duration-200 ease-in-out"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
