import { Navbar, Nav, Container, Jumbotron } from "reactstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background: white;
  border-bottom: 1px solid rgba(221, 164, 85, 0.4);
  margin: auto;
  padding: 10px 0px;
`;

export const StyledNav = styled(Nav)`
  background: white;
`;

export const StyledFooter = styled(Navbar)`
  background-color: #222222;
  min-height: 80px;
`;

export const SectionHeader = styled(Navbar)`
  background: white;
  border-bottom: 1px solid rgba(221, 164, 85, 0.4);
  margin: auto;
  padding: 10px 0px;
`;

export const SectionItem = styled(Nav)`
  background: white;
`;

export const MainContainer = styled(Container)`
  width: 85vw;
  max-width: 950px;
  margin-top: 3.5vh;
  padding: 0px;
  overflow: hidden;

  min-height: 100vh; /* will cover the 100% of viewport */
  display: block;
  position: relative;
  padding-bottom: 80px;
`;

export const StyledJumbotron = styled(Jumbotron)`
  background: white;
  /* border-bottom: 1px solid rgba(221, 164, 85, 0.4); */
  margin-bottom: 15px;
  padding: 48px 0px;

  @media screen and (max-width: 768px) {
    padding: 25px 0px;
  }
`;
