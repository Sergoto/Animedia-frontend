import React, { useEffect, useState } from 'react'
import "./listitem.scss"
import { Add, Info, ThumbDown, ThumbUp } from "@mui/icons-material";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [anime, setAnime] = useState({});

  useEffect(() => {
    const getAnime = async () => {
      try {
        const res = await axios.get("/anime/find/" + item, {
  
          headers: {
            token:
              "Bearer " +
              JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setAnime(res.data)
      } catch (err) {
        console.log(err)
      }
    }; getAnime();
  },[item])
  
  return (
    <Link to={{ pathname: "/details", anime: anime }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 285 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={anime.img} alt="" />
        {isHovered && (
          <>
            <div className="itemInfo">
              <div className="icons">
                <Info className="icon" />
                <Add className="icon" />
                <ThumbUp className="icon" />
                <ThumbDown className="icon" />
              </div>
              <div className="itemInfoTop">
                <div className="title">{anime.title}</div>
                <div className="genre">{anime.genre}</div>
                <span className="year">{anime.year}</span>
              </div>
              <div className="desc">{anime.desc}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
