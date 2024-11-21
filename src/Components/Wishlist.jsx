import { useState } from "react";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Wishlist = () => {
    const [cart] = useCart()
  const [role, setRole] = useState("buyer"); // Change to "seller" or "admin" to test role-based restrictions
 
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">My Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transform transition-transform hover:scale-105"
            >
              <img
                src={item.imageURL}
                alt={item.title}
                className="rounded-t-lg w-full h-40 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <p className="text-lg font-bold mb-4">{item.price}</p>
              <div className="flex justify-between items-center">
                {/* Add to Cart Button */}
                <button
                  className={`flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${
                    role !== "buyer" && "cursor-not-allowed opacity-50"
                  }`}
                  disabled={role !== "buyer"}
                >
                  <FaCartPlus className="mr-2" />
                  Add to Cart
                </button>

                {/* Remove from Wishlist Button */}
                <button
                  className={`flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ${
                    role !== "buyer" && "cursor-not-allowed opacity-50"
                  }`}
                  disabled={role !== "buyer"}
                >
                  <FaTrashAlt className="mr-2" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Role Change Simulation */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-medium mb-4">Simulate User Role</h2>
          <div className="flex justify-center gap-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => setRole("buyer")}
            >
              Buyer
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              onClick={() => setRole("seller")}
            >
              Seller
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
