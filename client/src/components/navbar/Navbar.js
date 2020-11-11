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
  
  const createAnimationsprite = async (e) =>{
    e.preventDefault();
    e.stopPropagation();

    let layer = {
        layer_name: "Layer 1",
        isVisable: true,
        isLocked: false,
        data: ""
    }
    let frame ={
      position: 0,
      duration: 50,
    }
    let animationstate ={
      animation_state_name: "Default State",
    }
    let animationsprite = {
      _id: '',
      owner: props.user._id,
      sprite_name: "Untitled",
      isPublic: true,
      width: 250,
      height: 250,
    };
    const { data } = await props.addAnimationsprite({ variables: { animationsprite: animationsprite, animationstate: animationstate, frame:frame, layer:layer}, refetchQueries:[{query: GET_DB_ANIMATIONSPRITES}] });
    animationsprite._id = data.addAnimationsprite;
    animationsprite.__typename = 'Animationsprite';
    props.updateAnimationspriteField({variables: { _id: null, field: null, value: animationsprite, opcode: 1 }});
    if(data.addAnimationsprite){
      props.history.push({
        pathname: '/edit:' + data.addAnimationsprite,
        animationsprite
      })

    }
  }

  const login = () =>{
    let username = props.user.username;
    return (
          <BootNavbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink to="/home">Community</NavLink>
              </Nav.Link>
            </Nav>
            <NavDropdown title={username} id="collasible-nav-dropdown" className="right">
              <NavDropdown.Item onSelect={e => console.log(e)} onClick={e => createAnimationsprite(e)}>Create </NavDropdown.Item>

              <NavLink to="/profile">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              </NavLink>
            {/* <CreateModal {...props} /> */}
              <NavDropdown.Divider />
              <NavDropdown.Item>Sign Out</NavDropdown.Item>
            </NavDropdown>  
          </BootNavbar.Collapse>
      );

  }
  
  const logout = () =>{
    return(
    <BootNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to="/home">Community</NavLink>
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

export default compose(
  graphql(ADD_ANIMATIONSPRITE, {name: 'addAnimationsprite'}),
  graphql(UPDATE_LOCAL_ANIMATIONSPRITE_FIELD, {name: 'updateAnimationspriteField'}),
  graphql(GET_DB_ANIMATIONSPRITES, {name: 'getDbAnimationsprites'}),
)(Navbar);

