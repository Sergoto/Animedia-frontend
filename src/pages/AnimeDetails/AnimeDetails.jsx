import "./AnimeDetails.scss";
import React from 'react'
import { Link } from "react-router-dom";
import { ArrowBackOutlined } from "@mui/icons-material";


function AnimeDetails() {
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