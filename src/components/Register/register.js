import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import States from "../Util/states";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import { registerUser } from "../../api";
import { HOME_ROUTE } from "../../constants";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const registerSubmit = async () => {
    return await registerUser({
      name,
      email,
      username,
      password,
      address,
      city,
      state,
      zip,
    })
      .then(({ token }) => {
        if (token) {
          localStorage.setItem("token", JSON.stringify(token));
        } else {
          setErrorMessage("Something went horribly wrong");
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Something went horribly wrong");
      });
  };

  const checkToken = () => {
    if (JSON.parse(localStorage.getItem("token")) === null) {
      window.alert("Something went wrong please try again");
    } else {
      window.location.replace(HOME_ROUTE);
    }
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    await registerSubmit();
    checkToken();
  };

  return (
    <div className="register-container">
      <Form className="register-form" onSubmit={onFormSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="John Doe"
              onInput={(event) => {
                setName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onInput={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Username"
              onInput={(event) => {
                setUsername(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onInput={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            onInput={(event) => {
              setAddress(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              onInput={(event) => {
                setCity(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onInput={(event) => {
                setState(event.target.value);
              }}
            >
              <option>Choose...</option>
              <States />
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              onInput={(event) => {
                setZip(event.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>

        <Button
          style={{ float: "right", marginRight: "10px" }}
          variant="success"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
