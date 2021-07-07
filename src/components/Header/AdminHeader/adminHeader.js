import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { NEW_PLANT_ROUTE } from "../../../constants";

const AdminNav = () => {
  return (
    <div>
      <Navbar bg="danger" variant="danger">
        <Container>
          <Navbar.Brand>Admin Menu</Navbar.Brand>
          <Button variant="secondary">
            <Link
              to={NEW_PLANT_ROUTE}
              style={{
                textDecoration: "none",
                color: "whitesmoke",
              }}
            >
              Add New Plant
            </Link>
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};
export default AdminNav;
