import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import camara from "../../illustration/icons/ap/camara_n.png";
import edit_n from "../../illustration/icons/ap/edit_n.png";
import smileface_n from "../../illustration/icons/ap/smileface_n.png";
import { Link } from "react-router-dom";

import { GET_DB_ANIMATIONSPRITES } from '../../cache/queries'; 
import { ADD_ANIMATIONSPRITE } from '../../cache/mutation'; 
import { UPDATE_LOCAL_ANIMATIONSPRITE_FIELD } from '../../cache/mutation';




//traversy media
const Sidebar = (props) => {
  let user = props.user
  let isLoggedIn = false;
  console.log(props);
  if(user != null) isLoggedIn = true;

  const createAnimationsprite = async (e) =>{


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

  return (
    <div className="sidebar">
        
        <Link to="/home">
          <div>
            <img className="sidebar-icons"
            src={camara}
            />
            All Works
          </div>
        
        </Link>
        
        <Link to="/profile">
          <img className="sidebar-icons"
          src={edit_n}
          />
          Your Works
        </Link>

      
       
        <div onClick={createAnimationsprite}>
          <img className="sidebar-icons"
          src={smileface_n}
          />
          Editor
        </div>
    
        
    
    </div>
    
  );
};

export default  compose(
  graphql(ADD_ANIMATIONSPRITE, {name: 'addAnimationsprite'}),
  graphql(UPDATE_LOCAL_ANIMATIONSPRITE_FIELD, {name: 'updateAnimationspriteField'}),
  graphql(GET_DB_ANIMATIONSPRITES, {name: 'getDbAnimationsprites'}),
)(Sidebar);

