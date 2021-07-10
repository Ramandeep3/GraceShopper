import React from "react";
import CartTable from "./cartTable";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <CartTable cart={cart} />
      <Navbar bg="dark" variant="dark">
        <Button style={{ marginLeft: "10px" }} variant="success">
          Checkout
        </Button>
      </Navbar>
    </>
  );
};

export default Cart;
