import { Add, Info, ThumbDown, ThumbUp } from '@mui/icons-material';
import React from 'react'
import "./listitem.scss"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


function ListItem({ index, item }) {
  
  const [anime, setAnime] = useState({});

  useEffect(() => {
    const getAnime = async () => {
      try {
        const res = await axios.get("/anime/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDg2OWYzYjUyMDAzOTk1NWUxYjAyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODQyNzU3NiwiZXhwIjoxNjU4ODU5NTc2fQ.ThwDwVEzSux_tiunfreJaCJNvIUtDsv5EDkl9MeQ5v0",
          },
        }); setAnime(res.data);
      } catch (err) {
        console.log(err);
      }
    }; getAnime();
  }, [item])

  return (
    <Link to={{ pathname: "/details", anime:anime}}>
      <div className="listItem">
        <img src={anime?.img} alt="" />
        <div className="itemInfo">
          <div className="icons">
            <Info className="icon" />
            <Add className="icon" />
            <ThumbUp className="icon" />
            <ThumbDown className="icon" />
          </div>
          <div className="itemInfoTop">
            <span className="limit">+{anime.limit}</span>
            <span>{anime.year}</span>
          </div>
          <div className="desc">{anime.desc}</div>
          <div className="genre">{anime.genre}</div>
        </div>
      </div>
    </Link>
  );
}

export default ListItem