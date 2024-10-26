import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Problem from "../pages/problem/Problem"; 
import useAuthStore from "../Stores/use-auth-store";

const RoutesProject = ()  => {
    const { logout } = useAuthStore();
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home onLogout={logout}/>} />
                <Route path="/problem" element={<Problem onLogout={logout} />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesProject;