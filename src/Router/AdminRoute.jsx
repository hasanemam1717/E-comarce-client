import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdinmin";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";

const AdminRoute = (children) => {
  const [user, loading] = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading></Loading>
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
