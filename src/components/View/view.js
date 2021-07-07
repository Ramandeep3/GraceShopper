import React from "react";
import Header from "../Header/header";
import Home from "../Home/home";
import Learn from "../Learn/learn"
import "./view.css";
import { Route } from "react-router-dom";
import { HOME_ROUTE, REGISTER_ROUTE,LEARN_ROUTE,NEW_PLANT_ROUTE } from "../../constants";
import Register from "../Register/register";
import { createProduct } from "../../api";

const View = () => {
  return (
    <div className="body">
      <header className="header">
        <Header />
      </header>
      <main>
        <Route path={HOME_ROUTE} component={Home} />
        <Route path={REGISTER_ROUTE} component={Register} />
        <Route path={LEARN_ROUTE} component={Learn} />
        <Route path={NEW_PLANT_ROUTE} component={createProduct} />

      </main>
    </div>
  );
};

export default View;
