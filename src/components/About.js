import React from "react";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <>
      <Container className="p-0 about-container">
        <Row>
          <Col sm="12" md="7" className="about-image"></Col>
        </Row>
      </Container>
      <Container className="mb-4">
        <Row>
          <Col md="8" className="pl-1">
            <h3 className="light-title">Why become a Web Developer?</h3>
            <br />
            <p>
              While working in Digital Marketing (mostly Pay-Per-Click) over the
              last few years, I've always been troubled by the fact that the end
              result of my efforts are sometimes out of my control. You can
              follow best practices and do great work, but ultimately you are
              handing over your campaigns to the algorithms of the platforms on
              which you're advertising.
            </p>
            <p>
              Most of the time things go well. However, sometimes issues will
              arise and all that marketers can offer a client is a "best guess"
              as to why, because these advertising platforms aren't transparent
              about their inner workings (for good reason of course).
            </p>
            <p>
              That is what attracted me to Web Development. I like to know that
              my efforts will yield a predictable result; that I can layout a
              plan and execute it exactly. This idea ― combined with the fact
              that all digital advertising is made possible by the platforms
              built <i>by developers</i> ― is what made it clear to me that I
              want to be on the Development side of things.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="mb-4">
        <Row>
          <Col md="8" className="pl-1">
            <h3 className="light-title">
              What technologies are you focused on?
            </h3>
            <br />
            <Row>
              <Col sm="12" md="6" className="pl-3">
                <p className="pt-sans mb-1">CSS, LESS, SASS</p>
                <p>Familiar with LESS but prefer SASS.</p>
                <p className="pt-sans mb-1">JAVASCRIPT</p>
                <p>Always working to improve at vanilla JavaScript.</p>
              </Col>
              <Col sm="12" md="6" className="pl-3">
                <p className="pt-sans mb-1">REACT, REDUX</p>
                <p>
                  After building a foundation in HTML, CSS and JavaScript I have
                  been focused on React.
                </p>
                <p className="pt-sans mb-1">OTHER FRAMEWORKS & TOOLS</p>
                <p>
                  Mainly using Bootstrap, React Bootstrap, Reactstrap, and
                  Styled Components.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="mb-4">
        <Row>
          <Col md="8" className="pl-1">
            <h3 className="light-title">What about outside of work?</h3>
            <br />
            <p>
              In my spare time I'll be cooking a new recipe, consuming some kind
              of pop-culture (likely a Netflix series or a movie), reading a
              book or playing guitar.
            </p>
            <p>
              If the weather is nice you can find me out on the golf course with
              friends.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
