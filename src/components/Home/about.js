import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./about.css";

const About = () => {
  return (
    <div className="about-section">
      <Card bg="secondary" text="white" className="text-center">
        <div className="about-card">
          <img
            className="about-img"
            src="https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="About img"
          ></img>
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Welcome to The Plant Life. Here you can find all things plants you
              can learn, shop, and find all things plants. If you are new to
              plants please check out the "Learn" tab to learn about plants and
              how to treat them and help the grow. If you are not new to plants
              or have learned all you need to check out the shop tab or search
              by type with the dropdown. New user please feel free to signup or
              login to access features not available to the public.
            </p>
          </blockquote>
        </div>
      </Card>
    </div>
  );
};

export default About;
