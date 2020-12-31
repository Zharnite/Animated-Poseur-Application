import React, {useState} from "react";
import RegisterModal from "./RegisterModal.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import { LOGIN } from "../../cache/mutation";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { Redirect } from "react-router-dom";
import logo from "../../illustration/images/logo.png";
import LoginModal from "./LoginModal.js";



const LandingPage = (props) => {
  console.log(props)
  const [loading, toggleLoading] = useState(false);
  if (props.auth) {
    return <Redirect to="/home" />;
  } 
  
  return (
    <div className="login center">
      <h1 className="login-title">Animated Poseur</h1>
      <img 
        className="center"
        alt="logo"
        src={logo}
        width="500"
        height="500"
      />
      <h6 className="dark-font-color login-a">Create and share animated sprites online </h6>
      <div className="login-layout-btns">

        <LoginModal
              {...props}
              fetchUser={props.fetchUser}
              user={props.user}
        />
        <RegisterModal
              {...props}
              fetchUser={props.fetchUser}
              user={props.user}
        />
      </div>
    </div>
  );
};

//charlie@email.com
//charlie

export default compose(graphql(LOGIN, { name: "login" }))(LandingPage);
