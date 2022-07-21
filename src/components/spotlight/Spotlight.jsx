import { Add, InfoOutlined } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./spotlight.scss"

export default function Spotlight({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/anime/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDg2OWYzYjUyMDAzOTk1NWUxYjAyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODQyNzU3NiwiZXhwIjoxNjU4ODU5NTc2fQ.ThwDwVEzSux_tiunfreJaCJNvIUtDsv5EDkl9MeQ5v0",
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err)
      }
    };
    getRandomContent();
  }, [type])
  console.log(content)
  return (
    <div className="spotlight">
      {type && (
        <div className="category">
          <span>{type === "anime" ? "Animes" : "Movies"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
            <option value="Shonen">Shonen</option>
            <option value="slice-of-life">Slice-of-Life</option>
            <option value="isekai">Isekai</option>
            <option value="sports">Sports</option>
            <option value="horro">Horror</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="feature" />
      <div className="info">
        <img
          className="feature"
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">
         {content.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <Add />
            <span>Add</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
