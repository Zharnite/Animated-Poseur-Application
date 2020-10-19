import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import BootNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";



import "bootstrap/dist/css/bootstrap.css";

const CreateModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <NavDropdown.Item onClick={handleShow}>
        Create
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Form id="register-form">
                <Modal.Header closeButton>
                    <Modal.Title>Create New Animation Sprite</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Title" />
                    </Form.Group>
                    <Form.Group controlId="formWidth">
                        <Form.Label>Width</Form.Label>
                        <Form.Control type="width" placeholder="250" />
                    </Form.Group>
                    <Form.Group controlId="formLength">
                        <Form.Label>Length</Form.Label>
                        <Form.Control type="length" placeholder="250" />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" row sm={2}>
                            Privacy
                        </Form.Label>
                        <Row sm={10}>
                            <Form.Check
                            type="radio"
                            label="private"
                            name="formHorizontalRadios"
                            id="formPrivate"
                            />
                            <Form.Check
                            type="radio"
                            label="public"
                            name="formHorizontalRadios"
                            id="formPublic"
                            />
                        </Row>
                        </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                    <Button variant="primary">
                    Create
                    </Button>

                </Modal.Footer>
            </Form>
        </Modal>    
    </NavDropdown.Item>

  );
};

export default CreateModal;

// export default RegisterModal;
