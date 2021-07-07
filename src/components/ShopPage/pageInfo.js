import React from "react";
import Card from "react-bootstrap/Card";

const PageInfo = () => {
  return (
    <Card bg="light" style={{ width: "100vw" }} className="mb-2">
      <Card.Header>
        <Card.Title> Card Title </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default PageInfo;
