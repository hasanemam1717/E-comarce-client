
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate()

  const onSubmit =(data)=>{
    const email =data.email
    const password =data.password
    createUser(email,password)
    .then((userCredential) => {
      // Signed in with email and pass
      const user = userCredential.data;
      console.log(user);
      navigate('/')
    })

    
    
    // console.log(email,password);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <p className="text-xs font-thin text-red-600">Name is required</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
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
              placeholder="Create a password"
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

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              {...register("conPass",{required:true,validate:(value)=>{
                if(watch('password') != value) {
                    return "Your password don't match.Please enter right password."
                }
              }})}
            />
            {
                errors?.conPass && (
                    <p className="text-xs font-thin text-red-600">Both password much matched.</p>
                  )
            }
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
             Register
            </button>
          </div>
        </form>

        {/* Redirect to Login */}
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 hover:text-indigo-700 font-medium transition duration-200"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
