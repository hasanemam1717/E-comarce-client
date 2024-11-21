import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Log In to Your Account
        </h2>
        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              Log In
            </button>
            {/* Google Login Button */}
            <div className="mt-4">
              <button
                type="button"
                className="w-full flex gap-4 items-center justify-center py-2 px-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                onClick={() => console.log("Google Login Triggered")}
              >
                <FaGoogle />
                Log In with Google
              </button>
            </div>
          </div>
        </form>

        {/* Redirect to Register */}
        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <NavLink
            to="/register"
            className="text-indigo-600 hover:text-indigo-700 font-medium transition duration-200"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
