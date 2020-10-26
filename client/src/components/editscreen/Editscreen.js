import React, { useState } from "react";
import reactCSS from "reactcss";
import Toolbar from "./toolbar/Toolbar.js";
import Filebar from "./filebar/Filebar.js";
import Animatorbar from "./animatorbar/Animatorbar.js";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { GET_ANIMATIONSPRITE_BY_ID } from "../../cache/queries";
import { useQuery } from "@apollo/react-hooks";


/*
* @param: Object animationsprite (JSON)
* @returns: array of selected animation-state, frame, and layer
*/
// function findSelectedComponents(animationsprite){
//   let animation_state = animationsprite.animation_states;
//   console.log(animation_state)
//   let animation_state_index = animation_state.findIndex( (state) => state.selected);
//   if(animation_state_index == -1) animation_state_index = 0;
//   const selected_animation_state = animation_state[animation_state_index];

//   let frames = selected_animation_state.frames
//   console.log(frames)
//   let frames_index = frames.findIndex( (frame) => frame.selected);
//   if(frames_index == -1) frames_index = 0;
//   const selected_frame = frames[frames_index];

//   let layers = selected_frame.layers
//   console.log(layers)
//   let layers_index = layers.findIndex( (layer) => layer.selected);
//   if(layers_index == -1) layers_index = 0;
//   const selected_layer = layers[layers_index];

//   return [selected_animation_state, selected_frame, selected_layer]
// }

function findSelectedFrame(animation_state){
  let frames = animation_state.frames
  let frames_index = frames.findIndex( (state) => state.selected);
  if(frames_index == -1) frames_index = 0;
  return frames[frames_index];
}


function Editscreen(props) {
  //let [selectedAnimationStateJSON, selectedFrameJSON, selectedLayerJSON] = findSelectedComponents(animationsprite);
  console.log(props);
  let optionalPath = props.match.params.id;
  var spriteID = optionalPath.substring(1,optionalPath.length)
  console.log(spriteID);
  const [brushSize, setBrushSize] = useState(1);
  const [brushColor, setBrushColor] = useState([0, 0, 0]);
  
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [animationsprite, setAnimationsprite] = useState(
    {  
      "_id": "5f96e8ffcadaf904cae9c34b",
      "owner": "5f8cf080c3f2491bf2c4ff08",
      "sprite_name": "tytytyty",
      "isPublic": true,
      "width": 250,
      "height": 250,
      "animation_states": [
        {
          "animation_state_name": "default",
          "frames": [
            {
              "position": 1,
              "duration": 50,
              "layers": [
                {
                  "layer_name": "layer1",
                  "isVisable": false,
                  "isLocked": false,
                  "data": ""
                  }
                ]
              }
            ]
          }
        ]
      }
  );
  const [currentStateFrameLayer, setCurrentStateFrameLayer] = useState( 
    {"state" : animationsprite.animation_states[0], "frame" : animationsprite.animation_states[0].frames[0], "layer" : animationsprite.animation_states[0].frames[0].layers[0]});
 

  const { loading, error, data, refetch } = 
    useQuery(GET_ANIMATIONSPRITE_BY_ID,{variables: { spriteID },});
    if(loading) { /* Good place for a spinner or something */ }
    if(error) { console.log("Editscreen => " + error); }
    if(data) { 
      console.log(data)
      //data.GetDBAnimatationspriteByID(id)

    }
  
    const setSFL=(x)=>{
      console.log(x)
      const {componentToUpdate, updatedComponent} = x
      let newAnimationsprite = animationsprite;

      switch(componentToUpdate){
        case "STATE":
          break;
        case "FRAME":
          newAnimationsprite.animation_states[0].frames[0].layers = updatedComponent
          setAnimationsprite(newAnimationsprite);
          break
        case "LAYER":
          break
      }

    }


  return (
    <div className="editscreen center">
      <Toolbar sfl={currentStateFrameLayer} selectedTool={selectedTool} setSelectedTool={setSelectedTool} brushColor={brushColor}/>
      <Animatorbar sfl={currentStateFrameLayer} selectedTool={selectedTool}/>
      <Filebar {...props} sfl={currentStateFrameLayer} setSFL={setSFL}/>
    </div>
  );
}

export default compose(
  graphql(GET_ANIMATIONSPRITE_BY_ID, { name: "GetDBAnimatationspriteByID" })
)(Editscreen);


//5f9108f9119cad1334c6624d