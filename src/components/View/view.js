import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import Home from "../Home/home";
import "./view.css";
import { Route } from "react-router-dom";
import { HOME_ROUTE } from "../../constants";

const View = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("token"))) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <div className="body">
      <header className="header">
        <Header
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </header>
      <main>
        <Route path={HOME_ROUTE} component={Home} />
      </main>
    </div>
  );
};

export default View;
