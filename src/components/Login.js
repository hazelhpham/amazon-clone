import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {auth} from "./firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    //firebase login
  };
  const register = (e) => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            console.log(auth);
        })
        .catch(error => alert(error.message))
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frdwgroup.com%2Fwp-content%2Fuploads%2F2013%2F08%2FAmazon-800x450-1.jpg&f=1&nofb=1"
          alt=""
          className="header__logo"
        />
      </Link>

      <div className="login__container">
        <h1> Sign-in</h1>
        <form>
          <h5> Email</h5>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5> Password</h5>
          <input
            type="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signinButton"
          >
            {" "}
            Sign In
          </button>
        </form>
        <p>
          {" "}
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.{" "}
        </p>
        <button onClick={register} className="login__registerButton">
          {" "}
          Create amazon account{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
