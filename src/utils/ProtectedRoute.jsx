import { Navigate } from "react-router";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
    const token = Cookies.get("Tag_master_admin");
    if (!token) {
        return <Navigate to="/signin" replace />;
    }
    return children;
};

export default ProtectedRoute;
