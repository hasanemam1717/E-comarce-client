import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


const GoogleLogIn = () => {
    const {googleLogIn} = useAuth()
    const navigate = useNavigate()
    const handleGoogleLogIn = ()=>{
        googleLogIn()
        .then(()=>{
            navigate('/')
        })
    }
    return (
        <div className="mt-4">
              <button
                type="button"
                className="w-full flex gap-4 items-center justify-center py-2 px-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                onClick={() =>handleGoogleLogIn() }
              >
                <FaGoogle />
                Log In with Google
              </button>
            </div>
    );
};

export default GoogleLogIn;