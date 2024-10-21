import { useCallback, useEffect, useState } from "react";
import useAuthStore from "../Stores/use-auth-store";
import "../Styles/Login.css";
import userDAO from "../Dao/userDAO";
import { useNavigate } from "react-router-dom";
import Object from "./Object";
import Home from "./Home";

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
        navigate(""); //Aqui podemos redirigir a otro componente (la pagina donde estará el objeto 3D -> Home)
      };

      checkUserExistsAndCreate();
    }
  }, [user, navigate]);

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  const handleLogin = useCallback(() => {
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

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  //Redireccionamiento a Pagina Principal
  return (
    <div className="container-login">
      {user ? (
        <>
          <Home onLogout={handleLogout} /> 
        </>
      ) : (
        <main className="Container">
        <div className="wrapper">
          <form action="" className="form" onSubmit={handleEmailPasswordAction}>
            <h1 className="title">{isRegister ? "Registro" : "Inicio"}</h1>
            <div className="inp">
              <input
                type="text"
                id="usuario"
                className="input"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="inp">
              <input
                type="password"
                id="contraseña"
                className="input"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <button type="submit" className="submit">
              {isRegister ? "Registrarse" : "Iniciar sesión"}
            </button>
            {error && <p className="error-text">{error}</p>}
            <p className="text-login">Inicia sesión de forma rápida usando:</p>
            <button type="button" className="google" onClick={handleLogin}>
              Google
            </button>
            <p className="footer">
              {isRegister ? "¿Ya tienes una cuenta?" : "¿No tienes cuenta?"}
              <a
                href="#"
                className="link"
                onClick={() => setIsRegister((prev) => !prev)}
              >
                {isRegister ? " Inicia sesión" : " Regístrate"}
              </a>
            </p>
          </form>
          <div className="banner">
            <h1 className="wel-text">BIENVENIDO</h1>
            <p className="para">
              Gracias por estar aquí!! <br />
              Web Educativa
            </p>
          </div>
        </div>
        </main>
      )}
    </div>
  );
};

export default Login;
