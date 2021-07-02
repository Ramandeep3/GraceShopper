import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "./Searchbar/searchbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import CartModal from "./CartModal/cartModal";
import LoginModal from "./Login/login";

const Header = () => {
  return (
    <div>
      <Navbar className="header-content" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="header-title" href="#home">
          The Plant Life
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <Nav.Link href="#link">Learn</Nav.Link>
            <NavDropdown title="Shop by Type" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Flowering</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Non-Flowering
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fruit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Trees</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">Indoor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Outdoor</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <CartModal />
            </Nav.Link>
          </Nav>
          <SearchBar />
          <br />
          <LoginModal />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
