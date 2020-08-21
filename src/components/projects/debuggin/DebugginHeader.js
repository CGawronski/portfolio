import React from "react";
import { Container, Row, Col } from "reactstrap";

const DebugginHeader = (props) => {
  return (
    <>
      <Container className="pt-4  mb-4  project-description">
        <Row>
          <Col md="7" className="pl-1">
            <h3>Debuggin'</h3>
            <br />
            <p className="m-0">
              A helpdesk ticket-tracking app for submitting software bugs and
              other issues. Created with React, Redux, Redux-Form, React
              Bootstrap, Styled Components and Google OAuth 2.0 for signing in.{" "}
            </p>
            <br />
            <p>
              View the live app here:{" "}
              <a
                className="light-anchor"
                href="https://debuggin-app-clg.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer">
                Debuggin'
              </a>{" "}
            </p>
            <p>
              View the source code here:{" "}
              <a
                className="light-anchor"
                href="https://github.com/CGawronski/debuggin-app"
                target="_blank"
                rel="noopener noreferrer">
                github.com/CGawronski/debuggin-app
              </a>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DebugginHeader;
