import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.scss";
import React from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [username, setUsername] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const navigate = useNavigate();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("/auth/register", { email, username, password });
      navigate.push("/login");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="https://imgur.com/UncIP3d.png" alt="" />
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
        <h2>Sign up below</h2>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Sign Up!
            </button>
          </div>
        ) : (
          <form className="input2">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
        <h2>All ready signed up? Sign in below!</h2>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="loginButton"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}