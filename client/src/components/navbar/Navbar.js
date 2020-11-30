import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import BootNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import CreateModal from "./CreateModal";
import { GET_DB_ANIMATIONSPRITES } from '../../cache/queries'; 
import { ADD_ANIMATIONSPRITE } from '../../cache/mutation'; 
import { UPDATE_LOCAL_ANIMATIONSPRITE_FIELD } from '../../cache/mutation'; 
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";



//traversy media
const Navbar = (props) => {
  let user = props.user
  let isLoggedIn = false;
  console.log(props);
  if(user != null) isLoggedIn = true;
  



  const login = () =>{
    let username = props.user.username;
    return (
          <BootNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className={"dark-font-color"}> 
              {username}      
              </Nav.Link>
              <div class="navbar-user-icon"></div>
              <button class="navbar-logout-btn">Log out</button>
            </Nav>
          </BootNavbar.Collapse>
      );

  }
  
  const logout = () =>{
    return(
    <BootNavbar.Collapse id="basic-navbar-nav">
        
    </BootNavbar.Collapse>
    );
  
  }

  return (
    <div className="navbarscreen">
      <BootNavbar
        collapseOnSelect
        className="justify-content-end navbar-custom"
        expand="md"
      >
        <BootNavbar.Brand>
          <NavLink to="/" className="navbar-text-custom">
            <img
              alt="L"
              src={require("../../illustration/images/logo.png")}
              width="50"
              height="50"
            />{" "}
            nimated Poseur
          </NavLink>
        </BootNavbar.Brand>
        {isLoggedIn ? login() : logout()}
      </BootNavbar>
      <div className={"navbar-meun-btn"}>

      </div>
    </div>
  );
};

export default compose(
  graphql(ADD_ANIMATIONSPRITE, {name: 'addAnimationsprite'}),
  graphql(UPDATE_LOCAL_ANIMATIONSPRITE_FIELD, {name: 'updateAnimationspriteField'}),
  graphql(GET_DB_ANIMATIONSPRITES, {name: 'getDbAnimationsprites'}),
)(Navbar);

