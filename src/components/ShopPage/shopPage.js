import React, { useState } from "react";
import AllCards from "./allCards";
import ShopPageNav from "./shopHeader";
import "./shopPage.css";

const ShopPage = () => {
  const [title, setTitle] = useState("Shop All");
  return (
    <>
      <div className="shopPage-body">
        <div className="shop-header">
          <ShopPageNav title={title} setTitle={setTitle} />
        </div>
        <div className="shop-allCards">
          <AllCards title={title} setTitle={setTitle} />
        </div>
      </div>
    </>
  );
};
export default ShopPage;
