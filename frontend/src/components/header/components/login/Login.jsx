import React from "react";
import profileSVG from "../../../PersonCard/placeholder.svg";
import { useAuth } from "../../../../context/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { authToken, handleLogin, handleLogout, currentUser } = useAuth();

  return (
    <>
      {authToken ? (
        <>
          <button onClick={handleLogout}>Выйти</button>
          <Link className={"nav__el login__button"} to={`/users/${currentUser.id}`}>
            <img
              src={profileSVG}
              alt="Ваш профиль"
              className="login__button__svg"
            />
          </Link>
        </>
      ) : (
        <button onClick={handleLogin}>Войти</button>
        
      )}
    </>
  );
};

export default Login;
