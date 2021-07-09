import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Home from "../Home/home";
import Cart from "../Header/CartModal/Cart";
import "./view.css";
import { Route } from "react-router-dom";
import Register from "../Register/register";
import Learn from "../Learn/learn";
import {
  HOME_ROUTE,
  REGISTER_ROUTE,
  SHOP_ROUTE,
  LEARN_ROUTE,
  NEW_PLANT_ROUTE,
  CART_ROUTE,
} from "../../constants";
import ShopPage from "../ShopPage/shopPage";
import AdminNav from "../Header/AdminHeader/adminHeader";
import createPlants from "../CreatePlants";

const View = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const userinfo = await getUserInfo();
  //     setUser(userinfo);
  //     console.log("USER INFO", user);
  //   })();
  // }, [user]);

  return (
    <div className="body">
      <header className="header">
        <Header
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          user={user}
          setUser={setUser}
        />
        <AdminNav />
      </header>
      <main>
        <Route path={HOME_ROUTE} component={Home} />
        <Route path={REGISTER_ROUTE} component={Register} />
        <Route path={CART_ROUTE} component={Cart} />
        <Route path={LEARN_ROUTE} component={Learn} />
        <Route path={NEW_PLANT_ROUTE} component={createPlants} />

        <Route path={SHOP_ROUTE} component={ShopPage} />
      </main>
    </div>
  );
};

export default View;
