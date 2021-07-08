import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { getAllPlants } from "../../api";
import "./topCards.css";

const TopCards = () => {
  const [count, setCount] = useState(1);
  const [cards, setCards] = useState([]);

  const minusButtonClick = (event) => {
    event.preventDefault();
    setCount(count - 1);
  };
  const addButtonClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const cardsFetch = async () => {
    try {
      const cardList = await getAllPlants();
      const shuffled = cardList.sort(() => 0.5 - Math.random());
      const topPicks = shuffled.slice(0, 6);
      return topPicks;
    } catch (error) {
      throw error;
    }
  };
  useEffect(async () => {
    const recivedCards = await cardsFetch();
    setCards(recivedCards);
  }, []);
  return cards.map((card, index) => {
    return (
      <Card style={{ width: "18rem" }} id={index} className="cards">
        <Card.Img variant="top" src={card.imageURL} />
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <Card.Text>{card.price}</Card.Text>
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
    );
  });
};
export default TopCards;
