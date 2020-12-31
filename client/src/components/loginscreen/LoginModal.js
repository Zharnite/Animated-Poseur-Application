import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Link } from "react-router-dom";


import { LOGIN } from "../../cache/mutation";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";


const LoginModal = (props) => {
  //console.log(props);
  const [show, setShow] = useState(false);
  const [loading, toggleLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
    <div>
      <button onClick={handleShow} className="login-btn">Login</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

          {/* <Card style={{ width: "50rem" }}>
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
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card> */}
        <Form id="register-form">
          <Modal.Header closeButton>
            <Modal.Title>Welcome Back</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
              <Button variant="primary" onClick={handleLogin}>
                Register
              </Button>

          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default compose(graphql(LOGIN, { name: "login" }))(LoginModal);

// export default RegisterModal;
