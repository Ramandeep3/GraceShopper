import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const CartTable = ({ cart, setCart }) => {
  const [quantity, setQuantity] = useState(cart.quantity);

  const minusButtonClick = (event) => {
    event.preventDefault();
    setQuantity(quantity - 1);
  };
  const addButtonClick = (event) => {
    event.preventDefault();
    setQuantity(quantity + 1);
  };

  console.log(cart);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((cartItem) => {
          return (
            <tr>
              <td>
                <img
                  src={cartItem.plantUrl}
                  alt="Img"
                  style={{ maxWidth: "75px", maxHeight: "75px" }}
                ></img>
              </td>
              <td>{cartItem.name}</td>
              <td>{cartItem.price}</td>
              <td>
                {" "}
                <InputGroup className="mb-3">
                  <Button
                    onClick={minusButtonClick}
                    variant="outline-secondary"
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Form.Control
                    style={{ textAlign: "center" }}
                    type="value"
                    value={cartItem.quantity}
                    aria-label="Quantity"
                    onInput={(event) => {
                      setQuantity(event.target.value);
                    }}
                  ></Form.Control>
                  <Button onClick={addButtonClick} variant="outline-secondary">
                    <AddIcon fontSize="small" />
                  </Button>
                </InputGroup>
              </td>
              <td>
                <Button variant="secondary">Update</Button>
              </td>
              <td>
                <DeleteForeverIcon />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CartTable;
