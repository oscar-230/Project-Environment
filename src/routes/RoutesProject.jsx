import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import useAuthStore from "../Stores/use-auth-store";

const RoutesProject = ()  => {
    const { logout } = useAuthStore();
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home onLogout={logout}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesProject;