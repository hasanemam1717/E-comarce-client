import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdinmin";

const LeftSide = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const { logOut } = useAuth();
  return (
    <div>
      <div className="bg-stone-100 border-r-black py-10 px-6  min-h-screen">
        <div className="text-2xl lg:text-4xl mb-10 text-center font-bold text-orange-600">
          TrendLoop
        </div>
        <div className="flex flex-col gap-3 mt-2">
          {isAdmin ? (
            <>
              <NavLink
                className="flex gap-3 hover flex-row items-center border-t border-2 border-orange-600 shadow-md rounded-md p-2"
                to="/"
              >
                <FaHome></FaHome>
                Home
              </NavLink>
              <NavLink
                className="flex gap-3 hover flex-row items-center border-t border-2 border-orange-600 shadow-md rounded-md p-2"
                to="/dashboard/manageuser"
              >
                <FaUser></FaUser>
                Manage User
              </NavLink>
              <NavLink
                className="flex gap-3 hover flex-row items-center border-t border-2 border-orange-600 shadow-md rounded-md p-2"
                to="/dashboard/allusers"
              >
                <FaUsers></FaUsers>
                All Users
              </NavLink>{" "}
              <NavLink
                onClick={() => logOut()}
                className="flex gap-3 hover flex-row items-center border-t border-2 border-orange-600 shadow-md rounded-md p-2"
              >
                <BiLogOut />
                Log out
              </NavLink>{" "}
            </>
          ) : (
            <>
              {" "}
              <NavLink
                className="flex gap-3 hover flex-row items-center border-t border-2 border-orange-600 shadow-md rounded-md p-2"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => logOut()}
                className="flex gap-3 hover flex-row items-center border-t border-2 border-orange-600 shadow-md rounded-md p-2"
              >
                <BiLogOut />
                Log out
              </NavLink>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
