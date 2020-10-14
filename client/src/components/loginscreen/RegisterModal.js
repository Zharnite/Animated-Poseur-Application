import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {Link } from "react-router-dom";


import { REGISTER } from "../../cache/mutation";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";

// const handleCreateAccount = async (e) => {

//   for(let field in input) {
//     if(!input[field]) {
//        alert('All fields must be filled out to register');
//       // instead of alert, make another component displaying error msg and toggle it
//       return;
//     }
//   }
//   const { loading, error, data } = await props.register({ variables:	{ ...input } });
//   if(loading) { toggleLoading(true) };
//   if(error) {return `Error: ${error.message}`};
//   if(data) {
//     console.log(data);
//     toggleLoading(false);
//     props.fetchUser();
//     props.setShowCreate(false);
//   };

// };

const RegisterModal = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);
  const [loading, toggleLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateAccount = async (e) => {
    //check if its valid input
    var username = document.getElementById("register-form").elements[1].value;
    var email = document.getElementById("register-form").elements[2].value;
    var password = document.getElementById("register-form").elements[3].value;
    var login = { username, email, password };
    console.log(login);
    console.log(props.register);

    const { loading, error, data } = await props.register({
      variables: { ...login },
    });


    if (loading) {
      toggleLoading(true);
    }
    if (error) {
      return `Error: ${error.message}`;
    }
    if (data) {
      console.log(data);
			toggleLoading(false);
      props.fetchUser();
      document.location.href = '/home';
    }

  };

  return (
    <div>
      <p id="register" onClick={handleShow}>
        Don't have an account? Register now
      </p>

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
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
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
