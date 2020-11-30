import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Link } from "react-router-dom";


import { REGISTER } from "../../cache/mutation";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";


const RegisterModal = (props) => {
  //console.log(props);
  const [show, setShow] = useState(false);
  const [loading, toggleLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleCreateAccount = async (e) => {
    //check if its valid input
    let username = document.getElementById("registerUsername").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    var register = { username, email, password };
    console.log(register);
    console.log(props.register);

    const { loading, error, data } = await props.register({
      variables: { ...register },
    });


    if (loading) {
      toggleLoading(true);
    }
    if (error) {
      return `Error: ${error.message}`;
    }
    if (data) {
      toggleLoading(false);
      props.fetchUser();
      document.location.href = '/home';
    }

  };

  return (
    <div>
      <button onClick={handleShow} className="login-btn">Register</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form id="register-form">
          <Modal.Header closeButton>
            <Modal.Title>Welcome New Animator</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="registerUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="registerEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="registerPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
              <Button variant="primary" onClick={handleCreateAccount}>
                Register
              </Button>

          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default compose(graphql(REGISTER, { name: "register" }))(RegisterModal);

// export default RegisterModal;
