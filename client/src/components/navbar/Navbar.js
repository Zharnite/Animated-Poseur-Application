import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import BootNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
//traversy media
function loggedIn(user){

  return (
    <NavDropdown title="Username" id="collasible-nav-dropdown">
      <NavDropdown.Item>Profile</NavDropdown.Item>
      <NavDropdown.Item>Create</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>Sign Out</NavDropdown.Item>
    </NavDropdown>
  );
};

function loggedOut() {
  return (
    <Nav.Link>
      <NavLink to={"/login"}>Login</NavLink>
    </Nav.Link>
  );
}

const Navbar = (props) => {
  let user = props.user
  let isLoggedIn = false;
  if(user != null) isLoggedIn = true;
  return (
    <BootNavbar
      collapseOnSelect
      className="justify-content-end"
      expand="lg"
      bg="dark"
    >
      <BootNavbar.Brand>
        <NavLink to="/">
          <img
            alt="L"
            src={require("../../illustration/images/logo.png")}
            width="50"
            height="50"
          />{" "}
          The Animated Poseur
        </NavLink>
      </BootNavbar.Brand>
      <BootNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to="/community">Community</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/edit">Editscreen</NavLink>
          </Nav.Link>
        </Nav>
        <Nav>{isLoggedIn ? loggedIn(user) : loggedOut()}</Nav>
      </BootNavbar.Collapse>
    </BootNavbar>
  );
};

export default Navbar;
