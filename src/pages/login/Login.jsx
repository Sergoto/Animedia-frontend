import React from 'react'
import "./login.scss"

function Login() {
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
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="PassWord" />
          <button className="loginButton">Sign In</button>
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