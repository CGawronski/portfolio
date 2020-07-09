import React from "react";
import { NavItem, NavLink } from "reactstrap";

import { StyledNavbar, StyledNav } from "./StyledComponents";

const Header = () => {
  return (
    <>
      <StyledNavbar light expand="xs">
        <StyledNav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/" className="pt-sans pl-1 nav-title">
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about" className="pt-sans nav-title">
              ABOUT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="mailto:colingawronski@gmail.com"
              className="pt-sans nav-title">
              CONTACT
            </NavLink>
          </NavItem>
        </StyledNav>
      </StyledNavbar>
    </>
  );
};

export default Header;
