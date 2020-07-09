import React from "react";
import { Nav, NavItem, Container } from "reactstrap";

import { StyledFooter } from "./StyledComponents";

const Footer = () => {
  return (
    <div className="footer">
      <StyledFooter expand="xs">
        <Nav className="mr-auto" navbar>
          <Container className="p-0 mr">
            <NavItem className="footer-title pt-sans pl-3">
              <img
                className="footer-logo"
                src={require("../assets/cg-logo.png")}
                alt="logo"
              />
            </NavItem>
          </Container>
          <NavItem className="footer-title left-title pt-sans">
            COLIN GAWRONSKI
          </NavItem>
        </Nav>
        <Nav className="ml-auto pr-3" navbar>
          <NavItem className="footer-title pt-sans">
            COLINGAWRONSKI@GMAIL.COM
          </NavItem>
        </Nav>
      </StyledFooter>
    </div>
  );
};

export default Footer;
