import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../Styles/Quiz.css";

const Quiz = ({ onLogout }) => {

    return (
        <div>
            <Navbar onLogout={onLogout} />
            
            <Footer />
        </div>
    );
};

export default Quiz;
