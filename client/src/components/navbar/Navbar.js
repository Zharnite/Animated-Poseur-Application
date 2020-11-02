import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import BootNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import CreateModal from "./CreateModal";


//traversy media
const Navbar = (props) => {
  let user = props.user
  let isLoggedIn = false;
  console.log(props);
  if(user != null) isLoggedIn = true;
  
  const login = () =>{
    let username = props.user.username;
    return (<BootNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to="/community">Community</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/create">Create</NavLink>
          </Nav.Link>
        </Nav>
        <NavDropdown title={username} id="collasible-nav-dropdown" className="right">
        <NavLink to="/create">
        <NavDropdown.Item>
        Create 
        </NavDropdown.Item>
        </NavLink>
        <NavDropdown.Item>Profile</NavDropdown.Item>
        {/* <CreateModal {...props} /> */}
        <NavDropdown.Divider />
        <NavDropdown.Item>Sign Out</NavDropdown.Item>
        </NavDropdown>  
      </BootNavbar.Collapse>);

  }
  
  const logout = () =>{
    return(
    <BootNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to="/community">Community</NavLink>
          </Nav.Link>
        </Nav>
        <Nav.Link>
      <NavLink to="/login">Login</NavLink>
    </Nav.Link>
    </BootNavbar.Collapse>
    );
  
  }


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
      {isLoggedIn ? login() : logout()}
    </BootNavbar>
  );
};

export default Navbar;
