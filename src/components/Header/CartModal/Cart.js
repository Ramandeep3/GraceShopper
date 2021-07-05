import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Cart = ({ cart, setCart }) => {
  //   const minusButtonClick = (event) => {
  //     event.preventDefault();
  //     setCount(count - 1);
  //   };
  //   const addButtonClick = (event) => {
  //     event.preventDefault();
  //     setCount(count + 1);
  //   };

  return cart.map((cartItem) => {
    return (
      <>
        <div className="cart-items">
          <div className="cart-card">
            <Card style={{ width: "18rem" }} className="cards">
              <Card.Body>
                <Card.Title>{cartItem.name}</Card.Title>
                <Card.Text>{cartItem.description}</Card.Text>
                <Card.Text>{cartItem.price}</Card.Text>
                <InputGroup className="mb-3">
                  {/* <Button
                    onClick={minusButtonClick}
                    variant="outline-secondary"
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Form.Control
                    style={{ textAlign: "center" }}
                    type="value"
                    value={count}
                    aria-label="Quantity"
                    onInput={(event) => {
                      setCount(event.target.value);
                    }}
                  ></Form.Control>
                  <Button onClick={addButtonClick} variant="outline-secondary">
                    <AddIcon fontSize="small" />
                  </Button> */}
                  <Button variant="primary">Add to Cart</Button>
                </InputGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  });
};

export default Cart;
