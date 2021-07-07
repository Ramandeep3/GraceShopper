import React from "react";
import AllCards from "./allCards";
import PageInfo from "./pageInfo";
import ShopPageNav from "./shopHeader";
import "./shopPage.css";

const ShopPage = () => {
  return (
    <>
      <div className="shopPage-body">
        <div className="shop-header">
          <ShopPageNav />
        </div>
        <div className="page-info">
          <PageInfo />
        </div>
        <div className="shop-allCards">
          <AllCards />
        </div>
      </div>
    </>
  );
};
export default ShopPage;
