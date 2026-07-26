import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Landing from '../pages/Guest/Landing';

const ProtectedRoutes =()=> {
    const user= true 
    return user? <Outlet/> : <Navigate to ="/Landing" />
}

export default ProtectedRoutes;