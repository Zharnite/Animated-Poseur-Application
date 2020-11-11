import React, {useState} from "react";
import RegisterModal from "./RegisterModal.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import { LOGIN } from "../../cache/mutation";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { Redirect } from "react-router-dom";


const Login = (props) => {
  console.log(props)
  const [loading, toggleLoading] = useState(false);
  if (props.auth) {
    return <Redirect to="/home" />;
  } 
  
  const handleLogin = async (e) => {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    var login = { email, password};

    const { loading, error, data } = await props.login({ variables:{ ...login } });
    if(loading) { toggleLoading(true)};
    if (error) {
      return `Error: ${error.message}`;
    }
		if(data) {	
      toggleLoading(false)
      props.fetchUser();
      props.history.push({
        pathname: '/home',
      })
		};

  };

  return (
    <div className="center">
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Form id="login-form">
            <Form.Group controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <RegisterModal
              {...props}
              fetchUser={props.fetchUser}
              user={props.user}
            />
            <Button variant="primary"  onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

//charlie@email.com
//charlie

export default compose(graphql(LOGIN, { name: "login" }))(Login);
