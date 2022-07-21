import React from "react";
import "./app.scss";
import Home from "./components/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/SignUp/SignUp";
import AnimeDetails from "./pages/AnimeDetails/AnimeDetails";

function App() {
  const user = true;
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={ user ? <Home /> : <SignUp/>}/> */}
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate replace to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <SignUp /> : <Navigate replace to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate replace to="/" />}
        />
        {user && (
          <>
            <Route path="/anime" element={<Home type="anime" />} />
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/details" element={<AnimeDetails/>} />
  
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
