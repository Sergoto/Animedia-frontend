import { Add, InfoOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./featured.scss";

export default function Featured({ type, setGenre}) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`anime/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0])
      } catch (err) {
        console.log(err)
      }
    };
    getRandomContent();
  }, [type])

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "animes" ? "Animes" : "Movies"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="slice-of-life">Slice-of-Life</option>
            <option value="Shonen">Drama</option>
            <option value="isekai">Isekai</option>
            <option value="sports">Sports</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="add">
            <Add />
            <span>Add</span>
          </button>
          <Link to={{ pathname: "/details" }}>
            <button className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
