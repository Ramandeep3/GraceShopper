import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const ShopPageNav = ({ title, setTitle }) => {
  const [
    description,
    setDescription,
  ] = useState(`Here you can shop all available plants. If you are looking for something in particular 
  select a filter above. When you find the plant that is just right for you select the number 
  you would like and Add to Cart. If you just don't know about plants check out our learn page above.`);

  return (
    <div>
      <Navbar bg="secondary" variant="secondary">
        <Container>
          <Button
            onClick={(event) => {
              setTitle("Shop All");
              setDescription(
                `Here you can shop all available plants. If you are looking for something in particular 
                select a filter above. When you find the plant that is just right for you select the number 
                you would like and Add to Cart. If you just don't know about plants check out our learn page above.`
              );
            }}
            variant="outline-light"
          >
            Shop All
          </Button>
          <Button
            onClick={(event) => {
              setTitle("Flowering Plants");
              setDescription(`Flowering plants are a type of vascular plant that produces flowers in order to reproduce.
              Here you will find a full list of flowering plants that we offer. Here you will find a great selection of plants 
              that are sure to fill any space you may need with plenty of color and life.`);
            }}
            variant="outline-light"
          >
            Flowering
          </Button>
          <Button
            onClick={(event) => {
              setTitle("Non-Flowering Plants");
              setDescription(`Non-flowering plants are those that do not ever produce flowers.
              Here you can find a beautiful selection of greens for a more simplistic way of living. 
              of this wide selection you are assured to find a simple plant to thrive.`);
            }}
            variant="outline-light"
          >
            Non-Flowering
          </Button>
          <Button
            onClick={(event) => {
              setTitle("Fruit Plants");
              setDescription(`A fruit plant is a tree which bears fruit that is consumed or used by humans and some animals.
              here you will find a delicious selection of fruit plant for any flavor you crave. Fruit plants contain
              fruit that can be sweet, sour, ect. You will find the flavor that desire!`);
            }}
            variant="outline-light"
          >
            Fruit
          </Button>
          <Button
            onClick={(event) => {
              setTitle("Trees");
              setDescription(`a tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves in most species.
              Trees come in many different shapes and sizes however, don't expect to find a 100 year old red oak here
              All of our trees are 2-3 years of age and verified pest free.`);
            }}
            variant="outline-light"
          >
            Trees
          </Button>
          <Button
            onClick={(event) => {
              setTitle("Indoor Plants");
              setDescription(`Indoor plants are plants that grow indoors. There are a variety of tropical 
              plants, like palms, that thrive in indoor environments. How do you plant indoor plants? All of 
              our indoor plants are already in containers, so there is no need to plant them. If you would like
              to plant in a styled pot it a simple transfer.`);
            }}
            variant="outline-light"
          >
            Indoor
          </Button>
          <Button
            onClick={(event) => {
              setTitle("Outdoor Plants");
              setDescription(`Popular plants for outdoor gardens include ornamental trees and shrubs, 
              vines, vegetables and herbs, perennial flowers (flowers that return for three or more years)
               and annual flowers, which grow for one season. Here you will find a large selection to choose
               from. Some of these plants are shipped as bulbs if you have any questions please reach out to 
               our staff for assistance.`);
            }}
            variant="outline-light"
          >
            Outdoor
          </Button>
        </Container>
      </Navbar>
      <Card bg="light" style={{ width: "100vw" }} className="mb-2">
        <Card.Header>
          <Card.Title> {title} </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ShopPageNav;
