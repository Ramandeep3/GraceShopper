import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const ModalContents = ({ cart, setCart }) => {
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
        </tr>
      </thead>
      <tbody>
        {cart.map((cartItem) => {
          return (
            <tr>
              <td>
                <img
                  src={cartItem.plantUrl}
                  alt="img"
                  style={{ maxWidth: "75px", maxHeight: "75px" }}
                ></img>
              </td>
              <td>{cartItem.productName}</td>
              <td>{cartItem.price}</td>
              <td>
                {" "}
                <InputGroup className="mb-3">
                  <Button variant="outline-secondary">
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Form.Control
                    aria-label="Quantity"
                    value={cartItem.quantity}
                  />
                  <Button variant="outline-secondary">
                    <AddIcon fontSize="small" />
                  </Button>
                </InputGroup>
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
export default ModalContents;
