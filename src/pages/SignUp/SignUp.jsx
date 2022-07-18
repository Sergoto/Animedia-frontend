import React from "react";
import "./signup.scss";

function SignUp() {
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="https://imgur.com/UncIP3d.png" alt="" />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container2">
        <h1>
          Welcome to Animedia!
          <br />
          An Anime Database for you to explore your favorite Animes
          <br />
          and discover new ones!
        </h1>
        <div className="input">
          <input type="email" placeholder="Email address" />
          <button className="registerButton">Sign Up Now!</button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
