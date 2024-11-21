
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogIn from "../../AuthProvidar/GoogleLogIn";

const Login = () => {
    const { logIn } = useAuth();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  const navigate = useNavigate()
  
    const onSubmit =(data)=>{
      const email =data.email
    const password =data.password
    logIn(email,password)
    .then(()=>{
      navigate('/')
    })
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Log In to Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              {...register("email", { required: true })}
            />
             {errors?.email && (
              <p className="text-xs font-thin text-red-600">Email is required</p>
            )}
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
              {...register("password", { required: true, minLength: 8 })}
            />
             {errors?.password?.type === "required" && (
              <p className="text-xs font-thin text-red-600">Password is required</p>
            )}
             {errors?.password?.type === "minLength" && (
              <p className="text-xs font-thin text-red-600">Password  must have atleast 8 charectars.</p>
            )}
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
            <GoogleLogIn></GoogleLogIn>
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
