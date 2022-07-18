import React from 'react'
import "./home.scss";
import Navbar from '../navbar/Navbar';
import Spotlight from '../spotlight/Spotlight';
import List from '../list/List';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Spotlight type="anime" />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
}

export default Home