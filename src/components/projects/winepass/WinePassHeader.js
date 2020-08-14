import React from "react";
import { Container, Row, Col } from "reactstrap";

const WinePassHeader = (props) => {
  return (
    <>
      <Container className="pt-4  mb-4  project-description">
        <Row>
          <Col md="7" className="pl-1">
            <h3>WinePass</h3>
            <br />
            <p className="m-0">
              Using only CSS Grid and Flexbox to create a site with some
              beautifully laid-out sections.{" "}
            </p>
            <br />
            <p>
              View the live site here:{" "}
              <a
                className="light-anchor"
                href="https://winepass.herokuapp.com/home.html"
                target="_blank"
                rel="noopener noreferrer">
                WinePass
              </a>{" "}
            </p>
            <p>
              View the source code here:{" "}
              <a
                className="light-anchor"
                href="https://github.com/CGawronski/winepass"
                target="_blank"
                rel="noopener noreferrer">
                https://github.com/CGawronski/winepass
              </a>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default WinePassHeader;
