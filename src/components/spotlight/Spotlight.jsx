import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import React from 'react'
import "./spotlight.scss"

export default function Spotlight({type}) {
  return (
    <div className="spotlight">
      {type && (
        <div className="category">
          <span>{type === "anime" ? "Animes" : "Movies"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://imgur.com/btjGBM2.png" alt="feature" />
      <div className="info">
        <img
          className="feature"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sword_Art_Online_anime_logo.svg/1280px-Sword_Art_Online_anime_logo.svg.png"
          alt=""
        />
        <span className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          expedita delectus, nam cumque mollitia obcaecati nisi atque quam ea
          repudiandae tempora voluptate cupiditate aliquid sint blanditiis nemo
          culpa. Dolorum, debitis.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
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
