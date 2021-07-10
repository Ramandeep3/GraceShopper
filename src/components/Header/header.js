import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "./Searchbar/searchbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import CartModal from "./CartModal/cartModal";
import LoginModal from "./Login/login";
import { Link } from "react-router-dom";
import {
  HOME_ROUTE,
  LEARN_ROUTE,
  SHOP_ROUTE,
  FLOWERING_ROUTE,
  NONFLOWERING_ROUTE,
  FRUIT_ROUTE,
  TREES_ROUTE,
  INDOOR_ROUTE,
  OUTDOOR_ROUTE,
 
} from "../../constants";
import { getUserCart } from "../../api";

const Header = ({ authenticated, setAuthenticated, user, setUser }) => {
  const [cart, setCart] = useState([]);
  const username = JSON.parse(localStorage.getItem("username"));

  useEffect(() => {
    (async () => {
      const userCart = await getUserCart(username);
      console.log("HEADER USE EFFECT USERCART", userCart);
      setCart(userCart);
    })();
  }, []);

  console.log("AFTER USE EFFECT", cart);

  return (
    <div>
      <Navbar className="header-content" bg="dark" variant="dark" expand="lg">
        <Link to={HOME_ROUTE}>
          <Navbar.Brand className="header-title">The Plant Life</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              style={{ textDecoration: "none", color: "whitesmoke" }}
              to={SHOP_ROUTE}
            >
              <div>Shop</div>
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "whitesmoke",
                paddingLeft: "5px",
              }}
              to={LEARN_ROUTE}
            >
              <div>Learn</div>
            </Link>
            <NavDropdown title="Shop by Type" id="basic-nav-dropdown">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={FLOWERING_ROUTE}
              >
                <div>Flowering</div>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={NONFLOWERING_ROUTE}
              >
                <div>Non-Flowering</div>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={FRUIT_ROUTE}
              >
                <div>Fruit</div>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={TREES_ROUTE}
              >
                <div>Trees</div>
              </Link>
              <NavDropdown.Divider />
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={INDOOR_ROUTE}
              >
                <div>Indoor</div>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={OUTDOOR_ROUTE}
              >
                <div>Outdoor</div>
              </Link>
            </NavDropdown>
            <Nav.Link>
              <CartModal cart={cart} setCart={setCart} />
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
