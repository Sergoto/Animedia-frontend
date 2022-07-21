import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="leftNav">
          <img src="https://imgur.com/UncIP3d.png" alt="" />
          <Link to="/" className="link">  
          <span>HomePage</span>
          </Link>
          <Link to="/anime" className="link">         
          <span>Anime Series</span>
          </Link>
          <Link to="/movies" className="link">
          <span>Anime Movies</span>
          </Link>
          <span>Popular</span>
          <span>MyList</span>
        </div>
        <div className="rightNav">
          <Search className="icon" />
          <span>AnimeList</span>
          <Notifications className="icon" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
