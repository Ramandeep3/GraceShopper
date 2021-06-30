import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <div>
      <Form id="search-content" className="d-flex">
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        <Button className="search-button" variant="outline-info">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
