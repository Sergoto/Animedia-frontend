import React, { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../navbar/Navbar";
import Spotlight from "../spotlight/Spotlight";
import List from "../list/List";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDg2OWYzYjUyMDAzOTk1NWUxYjAyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODQyNzU3NiwiZXhwIjoxNjU4ODU5NTc2fQ.ThwDwVEzSux_tiunfreJaCJNvIUtDsv5EDkl9MeQ5v0",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Spotlight type={type} setGenre={setGenre} />
      {lists.map((list, key)  => (
        <List key={key} list={list}/>
      ))}
    </div>
  );
};

export default Home;
