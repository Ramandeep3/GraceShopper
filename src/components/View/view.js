import React from "react";
import Header from "../Header/header";
import Home from "../Home/home";
import "./view.css";
import { Route } from "react-router-dom";
import { HOME_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from "../../constants";
import Register from "../Register/register";
import ShopPage from "../ShopPage/shopPage";
import AdminNav from "../Header/AdminHeader/adminHeader";

const View = () => {
  return (
    <div className="body">
      <header className="header">
        <Header />
        <AdminNav />
      </header>
      <main>
        <Route path={HOME_ROUTE} component={Home} />
        <Route path={REGISTER_ROUTE} component={Register} />
        <Route path={SHOP_ROUTE} component={ShopPage} />
      </main>
    </div>
  );
};

export default View;
