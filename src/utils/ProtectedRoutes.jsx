import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoutes =()=> {
    const { user, loading } = useAuth();

    if (loading) {
        return <p>Checking your account...</p>;
    }

    return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;