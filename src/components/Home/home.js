import React from "react";
import TopCards from "./topCards";
import About from "./about";

import "./home.css";

const Home = () => {
  return (
    <div className="home-body">
      <div>
        <About />
      </div>
      <br />
      <h1>Random Picks!</h1>
      <div className="hot-picks">
        <TopCards />
      </div>
    </div>
  );
};

export default Home;
