import React from "react";
import { Container, Row, Col } from "reactstrap";

const SectionHeader = (props) => {
  return (
    <>
      <Container>
        <Row className="mr-auto" navbar>
          <Col className="pt-sans section-header pl-1">{props.title}</Col>
        </Row>
      </Container>
    </>
  );
};

export default SectionHeader;
