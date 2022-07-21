import "./AnimeDetails.scss";
import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { ArrowBackOutlined } from "@mui/icons-material";


function AnimeDetails() {
    const location = useLocation();
    const anime = location.anime
  return (
    <div className="animeDetails">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <h1 className="infoText">AnimeDetails</h1>
    </div>
  );
}

export default AnimeDetails