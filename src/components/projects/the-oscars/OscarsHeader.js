import React from "react";
import { Container, Row, Col } from "reactstrap";

const OscarsHeader = (props) => {
  return (
    <>
      <Container className="pt-4  mb-4  project-description">
        <Row>
          <Col md="7" className="pl-1">
            <h3>The Oscars</h3>
            <br />
            <p className="m-0">
              Connects with the{" "}
              <a
                className="light-anchor"
                href="http://www.omdbapi.com/"
                target="_blank"
                rel="noopener noreferrer">
                OMDb API
              </a>{" "}
              to allow users to search for and nominate their favourite films.{" "}
            </p>
            <br />
            <p>
              View the live app here:{" "}
              <a
                className="light-anchor"
                href="https://the-oscars.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer">
                The Oscars
              </a>{" "}
            </p>
            <p>
              View the source code here:{" "}
              <a
                className="light-anchor"
                href="https://github.com/CGawronski/the-oscars"
                target="_blank"
                rel="noopener noreferrer">
                https://github.com/CGawronski/the-oscars
              </a>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default OscarsHeader;
