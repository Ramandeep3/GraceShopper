import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Footer = ({ cart, setCart }) => {
  return (
    <>
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Navbar.Brand style={{ marginLeft: "10px" }}>
          <img
            alt=""
            src="https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="60"
            height="30"
            className="d-inline-block align-top"
          />
          ThePlantLife LLC.
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Footer;
