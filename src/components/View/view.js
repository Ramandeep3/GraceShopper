import React from "react";
import Header from "../Header/header";
import Home from "../Home/home";
import "./view.css";

const View = () => {
  return (
    <div className="body">
      <div className="header">
        <Header />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default View;
