import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";

function Navbar() {
  return (
    <MDBNavbar
      color=""
      dark
      expand="md"
      style={{ width: "100%" }}
    >
      <MDBNavbarBrand>
        <strong className="white-text">Brandon Jimenez</strong>
      </MDBNavbarBrand>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="/about">
            <MDBIcon icon="home" className="mr-1" />
            About Me
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="" to="/portfolio">
            <MDBIcon icon="code" className="mr-1" />
            Apps
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="" to="/resume">
            <MDBIcon icon="" className="mr-1" />
            Resume
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="" to="/contact">
            <MDBIcon icon="envelope" className="mr-1" />
            Contact
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}

export default Navbar;