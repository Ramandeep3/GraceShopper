import React, { useEffect, useState } from "react";
import { getAllOrders } from "../../api/index";
import "./AllOrders.css";
import OrderCard from "./ordersCard.js";

const AllOrders=()=>{
    const [orders, setOrders] = useState([]);
    useEffect(() => {
      (async () => {
        const data = await getAllOrders();
        setOrders(data);
      })();
    }, []);
  

return (
    <>
      <h1 className="Title">All orders</h1>
      <div className="Orders-Container">
        {orders.map((order) => {
          return <ordersCard key={order.id} order={order} />;
        })}
      </div>
    </>
  );
};

export default AllOrders;
