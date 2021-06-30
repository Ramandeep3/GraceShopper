import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./cartModal.css";
import ModalContents from "./CartContents";

const CartModal = () => {
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
        <div>
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
            <ModalContents />
            <Form className="CartModal" onSubmit={onFormSubmit}>
              <div style={{ float: "right" }}>
                <Button variant="danger" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  style={{ marginLeft: "5px" }}
                  variant="success"
                  onClick={handleClose}
                  type="submit"
                >
                  Continue to Cart
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};
export default CartModal;
