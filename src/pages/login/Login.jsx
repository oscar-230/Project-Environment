import { useCallback, useEffect, useState } from "react";
import useAuthStore from "/src/Stores/use-auth-store";
import "/src/Styles/Login.css";
import userDAO from "/src/Dao/userDAO";
import { Navigate, useNavigate } from "react-router-dom";
import useQuizStore from "../../Stores/use-quiz-store";

const Login = () => {
  const {
    user,
    loginGoogleWithPopUp,
    logout,
    observeAuthState,
    loading,
    error,
    registerWithEmail,
    loginWithEmail,
  } = useAuthStore();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Importamos la función para cargar los resultados del quiz
  const { loadQuizResults } = useQuizStore();

  useEffect(() => { 
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName || "",
        photo: user.photoURL || "",
      };

      const checkUserExistsAndCreate = async () => {
        const existingUser = await userDAO.getUserByEmail(user.email);
        if (!existingUser) {
          await userDAO.createUser(newUser);
        }
        // Cargar los resultados del quiz después de crear al usuario en Firestore
        loadQuizResults(); // Esta función cargará los resultados desde Firestore y actualizará el estado en el store

        navigate("/home"); 
      };

      checkUserExistsAndCreate();
    }
  }, [user, navigate, loadQuizResults]);

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  const handleLogin = useCallback((event) => {
    event.preventDefault();
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleEmailPasswordAction = useCallback(
    (e) => {
      e.preventDefault();
      if (isRegister) {
        registerWithEmail(email, password);
      } else {
        loginWithEmail(email, password);
      }
    },
    [isRegister, email, password, registerWithEmail, loginWithEmail]
  );

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div className="container">
      <main className="login-container">
      <div className="login-wrapper">
      <form action="" className="form" onSubmit={handleEmailPasswordAction}>
          <div className="logo">
            <img src="/imgs/logo.png" className="img" alt="" />
          </div>
          <h1 className="title">{isRegister ? "Registro" : "Login"}</h1>

          <div className="input-container">
            <h2 className="email">Email</h2>
            <input
              type="text"
              id="usuario"
              className="input"
              placeholder="username.gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/*<i className="fa-solid fa-user"></i>*/}
          </div>
          <div className="input-container">
            <h2>Password</h2>
            <input
              type="password"
              id="contraseña"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <i className="fa-solid fa-lock"></i> */}
          </div>
          <button type="submit" className="login-button">
            {isRegister ? "Registrarse" : "Iniciar sesión"}
          </button>
          {error && <p className="error-text">{error}</p>}
          <p className="text-login">Or continue with</p>

          <div className="socials-buttons">
            <button type="button" className="google-register" onClick={handleLogin}>
              <img src="/imgs/google-icon.png" alt="" />
            </button>

            <button type="button" className="facebook-register">
              <img src="/imgs/facebook-icon.png" alt="" />
            </button>

          </div>

          <p className="login-footer">
            {isRegister ? "¿Have account?" : "¿Don´t have account yet?"}
            <a
              href="#"
              className="register-login-link"
              onClick={() => setIsRegister((prev) => !prev)}
            >
              {isRegister ? "Inicia sesión" : " Register for free"}
            </a>
          </p>
        </form>
      </div>
      </main>
    </div>
  );
};

export default Login;