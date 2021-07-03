import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { getAllPlants } from "../../api";

const TopCards = () => {
  const [count, setCount] = useState(1);

  const minusButtonClick = (event) => {
    event.preventDefault();
    setCount(count - 1);
  };
  const addButtonClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const cards = async () => {
    console.log("inCards");
    try {
      const cardList = await getAllPlants();
      return cardList;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="top-cards">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/6803/light-rocks-pot-white.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          />
          <Card.Body>
            <Card.Title>Succulents</Card.Title>
            <Card.Text>
              All cactus are succulents but not all succulents are cactus. To
              keep it simple, perhaps the best way to think of succulents is to
              think of them as plants that store water in their tissues.
            </Card.Text>
            <Card.Text>$42.99</Card.Text>
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
              <Button variant="primary">Add to Cart</Button>
            </InputGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default TopCards;
