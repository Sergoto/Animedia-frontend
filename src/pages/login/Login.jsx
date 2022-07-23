import React, { useContext, useState } from 'react'
import "./login.scss"
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="" src="" alt="" />
        </div>
      </div>
      <div className="container2">
        <form>
          <h2>Welcome to Animedia</h2>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <p>
            “Every journey begins with a single step. We just have to have
            patience.” – Milly Thompson (Trigun)
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login