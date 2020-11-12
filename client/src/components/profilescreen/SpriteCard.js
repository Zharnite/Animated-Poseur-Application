import React, {useState} from "react";
import { flowRight as compose, random } from "lodash";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { GET_ANIMATIONSPRITE_BY_ID, GET_DB_ANIMATIONSPRITES } from "../../cache/queries";
import { useQuery } from "@apollo/react-hooks";
import { graphql } from "@apollo/react-hoc";
import { useLazyQuery } from "@apollo/react-hooks";



const SpriteCard = (props) => {

    return (
        <div
        onClick={() => props.selectSpriteToEdit(props.sprite)}>
            <Card
            text={'dark'}
            style={{ width: '18rem' }}
            className="mb-2"
            
            >
            <Card.Body>
            <Card.Title>{props.sprite.sprite_name}</Card.Title>
            <Card.Text>
                
            </Card.Text>
            </Card.Body>
        </Card>     
        </div>
        
    )};

//charlie@email.com
//charlie

export default compose(

)(SpriteCard);
