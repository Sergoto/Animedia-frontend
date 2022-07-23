import { ArrowDropDown, Search } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../authContext/AuthActions";
import { AuthContext } from "../../authContext/AuthContext";
import "./navbar.scss";


const Navbar = () => {
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="leftNav">
          <img src="https://imgur.com/UncIP3d.png" alt="" />
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/anime" className="link">
            <span>Anime Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Anime Movies</span>
          </Link>
          <span>MyList</span>
        </div>
        <div className="rightNav">
          <Search className="icon" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
