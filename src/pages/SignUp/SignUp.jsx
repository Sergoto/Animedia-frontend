import React, { useRef, useState } from "react";
import "./signup.scss";

function SignUp() {
  const [email, setEmail] = useState("");
  const [setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

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
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignUp;
