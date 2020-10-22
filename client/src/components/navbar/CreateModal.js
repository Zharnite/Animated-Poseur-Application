import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import BootNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";


import { GET_DB_ANIMATIONSPRITES } from '../../cache/queries'; 
import { ADD_ANIMATIONSPRITE } from '../../cache/mutation'; 
import { UPDATE_LOCAL_ANIMATIONSPRITE_FIELD } from '../../cache/mutation'; 
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { useQuery } from "@apollo/react-hooks";



const CreateModal = (props) => {
    //console.log(props)
    let animationspriteList = [];
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { loading, error, data, refetch } = useQuery(GET_DB_ANIMATIONSPRITES);
    if(loading) { /* Good place for a spinner or something */ }
    if(error) { console.log(error); }
    if(data) { 
        animationspriteList = data.getAllAnimationsprites;
        console.log(data);
        console.log(animationspriteList);
       
    }
    const auth = props.user === null ? false : true;
    if(auth) { refetch() }


    const handleCreateAnimationSpriteSheet = async (e) => {
        var name = document.getElementById("create-animationsprite-form").elements[1].value;
        var width = document.getElementById("create-animationsprite-form").elements[2].value;
        var height = document.getElementById("create-animationsprite-form").elements[3].value;
        let animationsprite = {
            _id: '',
            owner: props.user._id,
            sprite_name: name,
            isPublic: true,
            width: 250,
            height: 250,

        };

        const { data } = await props.addAnimationsprite({ variables: { animationsprite: animationsprite}, refetchQueries:[{query: GET_DB_ANIMATIONSPRITES}] });
        console.log(data)
        animationsprite._id = data.addAnimationsprite;
        animationsprite.__typename = 'Animationsprite';
        props.updateAnimationspriteField({variables: { _id: null, field: null, value: animationsprite, opcode: 1 }});
        console.log(animationsprite);

        
    }

    return (

        <NavDropdown.Item onClick={handleShow}>
            Create
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
            <Form id="create-animationsprite-form">
            <Modal.Header closeButton>
                <Modal.Title>Create</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formBasicUsername">
                <Form.Label>Title</Form.Label>
                <Form.Control type="username" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Width</Form.Label>
                    <Form.Control type="username" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Heigth</Form.Label>
                    <Form.Control type="username" placeholder="Username" />
                </Form.Group>
                <Form.Group>
                <Form.Check
                type="radio"
                label="public"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                />
                </Form.Group>
                <Form.Group>
                <Form.Check
                type="radio"
                label="private"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                />
                </Form.Group>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cancel
                </Button>
                <Button variant="primary" onClick={handleCreateAnimationSpriteSheet}>
                    Register
                </Button>

            </Modal.Footer>
            </Form>
            </Modal>    
        </NavDropdown.Item>

  );
};

export default compose(
    graphql(ADD_ANIMATIONSPRITE, {name: 'addAnimationsprite'}),
    graphql(UPDATE_LOCAL_ANIMATIONSPRITE_FIELD, {name: 'updateAnimationspriteField'}),
    graphql(GET_DB_ANIMATIONSPRITES, {name: 'getDbAnimationsprites'}),
)(CreateModal);

// export default RegisterModal;
