// import React from "react";
// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarNav,
//   MDBNavItem,
//   MDBNavLink,
//   MDBIcon,
// } from "mdbreact";

// function Navbar() {
//   return (
//     <MDBNavbar
//       color="special-color-dark"
//       dark
//       expand="md"
//       style={{ width: "100%" }}
//     >
//       <MDBNavbarBrand>
//         <strong className="white-text">Collin P. Hodgson</strong>
//       </MDBNavbarBrand>
//       <MDBNavbarNav right>
//         <MDBNavItem>
//           <MDBNavLink className="waves-effect waves-light" to="/about">
//             <MDBIcon icon="home" className="mr-1" />
//             About Me
//           </MDBNavLink>
//         </MDBNavItem>
//         <MDBNavItem>
//           <MDBNavLink className="waves-effect waves-light" to="/portfolio">
//             <MDBIcon icon="code" className="mr-1" />
//             Apps
//           </MDBNavLink>
//         </MDBNavItem>
//         <MDBNavItem>
//           <MDBNavLink className="waves-effect waves-light" to="/resume">
//             <MDBIcon icon="file" className="mr-1" />
//             Resume
//           </MDBNavLink>
//         </MDBNavItem>
//         <MDBNavItem>
//           <MDBNavLink className="waves-effect waves-light" to="/contact">
//             <MDBIcon icon="envelope" className="mr-1" />
//             Contact
//           </MDBNavLink>
//         </MDBNavItem>
//       </MDBNavbarNav>
//     </MDBNavbar>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

export default function Nav () {
    return (
        <header className="App-header">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#top">Brandon Jimenez</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>igh
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/projects'>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/resume'>
                                    Resume
                                </Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Media
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
                                    <li><a className="dropdown-item" href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
                                    <li><a className="dropdown-item" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                                    <li><a className="dropdown-item" href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}