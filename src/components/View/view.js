import React from "react";
import Header from "../Header/header";
import Home from "../Home/home";
import "./view.css";
import { Route } from "react-router-dom";
import { HOME_ROUTE } from "../../constants";

const View = () => {
  return (
    <div className="body">
      <header className="header">
        <Header />
      </header>
      <main>
        <Route path={HOME_ROUTE} component={Home} />
      </main>
    </div>
  );
};

export default View;
