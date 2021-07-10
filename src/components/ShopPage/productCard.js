import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { addToUserCart, getPlantByName } from "../../api";

const ProductCard = (props) => {
  const { id, name, imageURL, price, description } = props;
  const username = JSON.parse(localStorage.getItem("username"));

  const [count, setCount] = useState(1);
  const quantity = count;

  const minusButtonClick = (event) => {
    event.preventDefault();
    setCount(count - 1);
  };
  const addButtonClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };
  const addToCart = async () => {
    const plantAddedToCart = await addToUserCart({
      username,
      id,
      price,
      quantity,
      imageURL,
    });
    console.log("plantAddedToCart", plantAddedToCart);

    // JSON.stringify(localStorage.setItem("cartItem", plantToAdd));
  };

  return (
    <Card style={{ marginTop: "10px", width: "18rem" }} className="cards">
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <InputGroup className="mb-3">
          <Button onClick={minusButtonClick} variant="outline-secondary">
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
          </Button>
          <Button
            onClick={(event) => {
              addToCart(event);
            }}
            variant="primary"
          >
            Add to Cart
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
