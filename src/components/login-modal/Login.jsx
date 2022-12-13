import { useState } from "react";
import "./Login.css";
import { FiX } from "react-icons/fi";
import { auth } from "../../firebase/config";

const Login = ({ setLoginOpen }) => {
  const [isLogin, setIsLogin] = useState("sign-up");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);


  const loginUser = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(username, password)
      .then((response) => setResponse(response))
      .catch((err) => setError(err.message));
  };
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(username, password)
      .then((response) => setResponse(response))
      .catch((err) => setError(err.message));
  };


  return (
    <div className="login-modal-wrapper">
      <div className="login-modal">
        <div className="login-top">
          {isLogin === "sign-up" ? (
            <>
              <p
                className="login-title disabled-login-title"
                onClick={() => setIsLogin("sign-up")}
              >
                Руйхатдан утиш
              </p>
              <p className="login-title" onClick={() => setIsLogin("login")}>
                Кириш
              </p>
            </>
          ) : (
            <>
              <p className="login-title" onClick={() => setIsLogin("sign-up")}>
                Руйхатдан утиш
              </p>
              <p
                className="login-title disabled-login-title"
                onClick={() => setIsLogin("sign-up")}
              >
                Кириш
              </p>
            </>
          )}
          <p onClick={() => setLoginOpen(false)} className="login-exit">
            <FiX />
          </p>
        </div>
        <div className="login-form-wraper">
          {
            response? <p className="success">Succesfull!!</p>:<p className="error">{error}</p>
          }

          {isLogin === "sign-up" ? (
            <form className="login-form">
              <input
                className="login-input"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button type="submit" className="confirm-button" onClick={signUp}>
                Руйхатдан утиш
              </button>
            </form>
          ) : (
            <form className="login-form">
              <input className="login-input" type="email" placeholder="Email" />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button onClick={loginUser} type="submit" className="confirm-button">
                Кириш
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
