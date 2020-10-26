import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";


import { GET_DB_ANIMATIONSPRITES } from './cache/queries'; 
import { ADD_ANIMATIONSPRITE } from './cache/mutation'; 
import { UPDATE_LOCAL_ANIMATIONSPRITE_FIELD } from './cache/mutation'; 
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { useQuery } from "@apollo/react-hooks";


const App = (props) => {
    console.log(props)
  let user = null;
    
  const handleCreateAnimationSpriteSheet = async (e) => {
    var name = document.getElementById("create-animationsprite-form").elements[0].value;
    // var width = document.getElementById("create-animationsprite-form").elements[2].value;
    // var height = document.getElementById("create-animationsprite-form").elements[3].value;
    let animationsprite = {
        _id: '',
        owner: props.user._id,
        sprite_name: name,
        isPublic: true,
        width: 250,
        height: 250,

    };

    const { data } = await props.addAnimationsprite({ variables: { animationsprite: animationsprite}, refetchQueries:[{query: GET_DB_ANIMATIONSPRITES}] });
    console.log("=========================================")
    animationsprite._id = data.addAnimationsprite;
    animationsprite.__typename = 'Animationsprite';
    props.updateAnimationspriteField({variables: { _id: null, field: null, value: animationsprite, opcode: 1 }});
    // console.log(data)
    // console.log(data.addAnimationsprite)
    // console.log(animationsprite)
    if(data.addAnimationsprite){
        props.history.push({
          pathname: '/edit:' + data.addAnimationsprite,
          state: {animationsprite : animationsprite}
        })
        console.log(props.history)
    }
    console.log("=========================================")
      
    }
 
  return (
      <div>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
        <Form id="create-animationsprite-form">

                    <Form.Group controlId="formBasicUsername">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="username" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Width</Form.Label>
                        <Form.Control type="username" placeholder="Username" />
                    </Form.Group>
            
                    <Button  onClick={handleCreateAnimationSpriteSheet}>
                        Register
                    </Button>
            </Form>
        </Card.Body>
      </Card>
      </div>
  );
};

export default compose(
    graphql(ADD_ANIMATIONSPRITE, {name: 'addAnimationsprite'}),
    graphql(UPDATE_LOCAL_ANIMATIONSPRITE_FIELD, {name: 'updateAnimationspriteField'}),
    graphql(GET_DB_ANIMATIONSPRITES, {name: 'getDbAnimationsprites'}),
)(App);
