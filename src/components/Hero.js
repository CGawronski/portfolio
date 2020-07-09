import React from "react";
import { Container, Row, Col } from "reactstrap";

import { StyledJumbotron } from "./StyledComponents";

const Hero = () => {
  return (
    <>
      <StyledJumbotron className="hero mb-0">
        <Container className="p-0">
          <Row>
            <Col sm="12" md="7" className="hero-column hero-image"></Col>
            <Col sm="12" md="5" className="hero-column hero-text">
              Hi, I'm Colin.
              <br />
              I'm a Web Developer who enjoys solving problems by arranging sleek
              components into useful, elegant applications.
              <br />
              <Row>
                <Col md="12" lg="6" xl="12" className="hero-details">
                  <p className="pt-sans p-0">LOCATION:</p>
                  <br />
                  <p>
                    <i>Toronto, ON</i>
                  </p>
                  <br />
                </Col>
                <Col md="12" lg="6" xl="12" className="hero-details">
                  <p className="pt-sans p-0">EMAIL:</p>
                  <br />
                  <p>
                    <i>colingawronski@gmail.com</i>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </StyledJumbotron>
    </>
  );
};

export default Hero;
