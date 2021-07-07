import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Home from "../Home/home";
import Cart from "../Header/CartModal/Cart";
import "./view.css";
import { Route } from "react-router-dom";
import { CART_ROUTE, HOME_ROUTE, REGISTER_ROUTE } from "../../constants";
import Register from "../Register/register";
import { getUserInfo } from "./api";

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

  useEffect(() => {
    (async () => {
      const userinfo = await getUserInfo();
      setUser(userinfo);
      console.log("USER INFO", user);
    })();
  }, [user]);

  return (
    <div className="body">
      <header className="header">
        <Header
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          user={user}
          setUser={setUser}
        />
      </header>
      <main>
        <Route path={HOME_ROUTE} component={Home} />
        <Route path={REGISTER_ROUTE} component={Register} />
        <Route path={CART_ROUTE} component={Cart} />
      </main>
    </div>
  );
};

export default View;
