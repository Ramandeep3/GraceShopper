import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const ShopPageNav = () => {
  return (
    <div>
      <Navbar bg="secondary" variant="secondary">
        <Container>
          <Button variant="outline-light">Flowering</Button>
          <Button variant="outline-light">Non-Flowering</Button>
          <Button variant="outline-light">Fruit</Button>
          <Button variant="outline-light">Trees</Button>
          <Button variant="outline-light">Indoor</Button>
          <Button variant="outline-light">Outdoor</Button>
        </Container>
      </Navbar>
    </div>
  );
};
export default ShopPageNav;
