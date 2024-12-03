import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Problem from "../pages/problem/Problem"; 
import Contamination from "../pages/contamination/Contamination";
import useAuthStore from "../Stores/use-auth-store";
import Scarcity from "../pages/scarcity/Scarcity";
import Staging from "../pages/Forest/Staging";
import DesertStaging from "../pages/Desert/DesertStaging";
import Solutions from "../pages/solutions/Solutions";
import Quiz from "../pages/quizzes/Quiz";

const RoutesProject = ()  => {
    const { logout } = useAuthStore();
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home onLogout={logout}/>} />
                <Route path="/problem" element={<Problem onLogout={logout} />} /> 
                <Route path="/contamination" element={<Contamination onLogout={logout} />} />
                <Route path="/scarcity"  element={<Scarcity onLogout={logout} />}  />
                <Route path="/staging" element={<Staging onLogout={logout} />} />
                <Route path="/desertstaging" element={<DesertStaging onLogout={logout} />} />
                <Route path="/solution" element={<Solutions onLogout={logout} />} />
                <Route path="/quiz" element={<Quiz onLogout={logout} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesProject;