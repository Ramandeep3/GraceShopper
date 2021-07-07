import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { loginUser } from "../../../api/index";
import "./login.css";
import { REGISTER_ROUTE } from "../../../constants";
import { Link } from "react-router-dom";

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState(
    "Something went horribly wrong"
  );

  const loginSubmit = async () => {
    return await loginUser({ username, password })
      .then(({ token }) => {
        if (token) {
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("username", JSON.stringify(username));
          window.location.reload();
        } else {
          setErrorMessage("Something went horribly wrong");
          window.alert(errorMessage);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Something went horribly wrong");
        window.alert(errorMessage);
      });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    loginSubmit();
  };
  return (
    <>
      <Button className="search-button" variant="dark" onClick={handleShow}>
        <LockOpenIcon />
      </Button>
      <Modal className="loginModal" show={show} onHide={handleClose}>
        <div>
          <Modal.Header
            style={{
              justifyContent: "center",
              backgroundColor: "black",
              color: "darkgray",
              letterSpacing: "0.2rem",
            }}
          >
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: "darkgray",
            }}
          >
            <Form onSubmit={onFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  label="Username"
                  placeholder="Enter Username"
                  onInput={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  label="Password"
                  placeholder="Enter Password"
                  onInput={(event) => {
                    setPassword(event.target.value);
                  }}
                  z
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <Link to={REGISTER_ROUTE}>
                <Button variant="secondary" onClick={handleClose}>
                  Signup
                </Button>
              </Link>
              <div style={{ float: "right" }}>
                <Button variant="danger" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="success" type="submit" onClick={handleClose}>
                  Login
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};
export default LoginModal;
