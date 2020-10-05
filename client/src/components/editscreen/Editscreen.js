import React, { useState }from "react";
import reactCSS from 'reactcss'
import Toolbar from "./toolbar/Toolbar.js"
import Filebar from "./filebar/Filebar.js"
import Animatorbar from "./animatorbar/Animatorbar.js"
import { graphql} from '@apollo/react-hoc';
import { flowRight as compose, random } from 'lodash';
import { GET_DB_ANIMATIONSPRITE } from '../../cache/queries'; 

function Editscreen (props){
  console.log(props);
  const [animationsprite, setAnimationsprite] = useState({
    "sprite_name": "SpriteSheet",
    "public": true,
    "width": 64,
    "height": 128,
    "animation_states":[
        {
            "animation_states_name": "state0",
            "layers":[
                {
                    "layer_name": "layer 1",
                    "isVisable": true,
                    "isLocked": false
                },
                {
                    "layer_name": "layer 2",
                    "isVisable": true,
                    "isLocked": false 
                }
            ],
            "frames" :[
                    {
                        "position" : 1,
                        "data": "asdfghjkl"
                    },
                    {
                        "position" : 2,
                        "data": "qwertyuiop"
                    }
            ]
        },
        {
            "animation_states_name": "state1",
            "layers":[
                {
                    "layer_name": "layer 1",
                    "isVisable": true,
                    "isLocked": false
                },
                {
                    "layer_name": "layer 2",
                    "isVisable": true,
                    "isLocked": false 
                }
            ],
            "frames" :[
                    {
                        "position" : 1,
                        "data": "asdfghjkl"
                    },
                    {
                        "position" : 2,
                        "data": "qwertyuiop"
                    }
            ]
        }
    ]
});

  

  const addFrame = () =>{

  }
  


  return(
    <div className="editscreen center">
      <Toolbar/>
      <Animatorbar animationsprite={animationsprite}/>
      <Filebar />
    </div>

  );
}


export default compose(
  graphql(GET_DB_ANIMATIONSPRITE, {name: 'GetDBAnimatationsprite'}),
)(Editscreen);
