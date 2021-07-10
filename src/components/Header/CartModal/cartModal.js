import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import "./cartModal.css";
import ModalContents from "./CartContents";
import { CART_ROUTE } from "../../../constants";
import Cart from "./Cart";

const CartModal = ({ cart, setCart }) => {
  // console.log(cart);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Nav to Cart page");
  };
  return (
    <>
      <Button className="search-button" variant="dark" onClick={handleShow}>
        <ShoppingCartIcon />
      </Button>
      <Modal className="CartModal" show={show} onHide={handleClose}>
        <Modal.Header
          style={{
            justifyContent: "center",
            backgroundColor: "black",
            letterSpacing: "0.2rem",
          }}
        >
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "black",
          }}
        >
          {/* Map through Cart state to displat */}
          <ModalContents cart={cart} setCart={setCart} />
          <Form className="CartModal" onSubmit={onFormSubmit}>
            <div style={{ float: "right" }}>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Link to={CART_ROUTE} cart={cart} setCart={setCart}>
                <Button
                  style={{ marginLeft: "5px" }}
                  variant="success"
                  onClick={handleClose}
                  type="submit"
                >
                  Continue to Cart
                </Button>
              </Link>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CartModal;
