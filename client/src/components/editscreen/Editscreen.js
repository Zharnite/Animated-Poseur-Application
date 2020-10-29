import React, { useState, useEffect } from "react";
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
  const auth = props.user === null ? false : true;
  //console.log(props);
  let optionalPath = props.match.params.id;
  let _id = optionalPath.substring(1,optionalPath.length)
  console.log(_id)
  //const { loading, error, data, refetch } = useQuery(GET_ANIMATIONSPRITE_BY_ID, {variables: { _id },});
  // if(loading) { console.log("Loading"); }
  // if(error) { console.log("Editscreen => " + error); }
  // if(data) { 
  //   console.log(data)
  //   //let sprite = data.GetDBAnimatationspriteByID
  //   //setSelectedLayer(data.GetDBAnimatationspriteByID);
  //   //setCurrentStateFrameLayer({"state" : sprite.animation_states[0], "frame" : sprite.animation_states[0].frames[0], "layer" : sprite.animation_states[0].frames[0].layers[0]});
  // }
  // const [animationsprite, setAnimationsprite] = useState(null);
  // const [currentStateFrameLayer, setCurrentStateFrameLayer] = useState(null);
  const [animationsprite, setAnimationsprite] = useState({
     
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
                  "index": 0,
                  "isVisable": false,
                  "isLocked": false,
                  "data": ""
                }
              ]
            }
          ]
        }
      ]
    });
  const [currentStateFrameLayerTool, setCurrentStateFrameLayerTool] = useState({state : animationsprite.animation_states[0], frame : animationsprite.animation_states[0].frames[0], layer : null, tool:null});

  /*
  * @author: Carlos Lopez
  * @var: x (array)
  * @description: Updates the animation sprite & sets selected components which the user may want to work with.
  * An update corresponds to a respective states: {"SPRITE", "STATE", "FRAME", LAYER", "TOOL"}.
  * The state determine which component of the data-structure to update. 
  * Refer to the Animation Sprite JSON data for cleafication on data-structure.
  * Example: if you want you update the animation sprites name, you would pass in ["SPRITE", update]
  * Example: if you want add a frame to the current state you would pass in ["STATE", update]
  * Example: if you want delete a layer from the current frame you would pass in ["FRAME", update]
  * Example: if you want select a layer from the current frame you would pass in ["LAYER", update]
  * 
  */
  const setSFL=(x)=>{
    const [componentToUpdate, updatedComponent] = x

    switch(componentToUpdate){
      case "SPRITE":
        console.log("Updating Sprite Components")
        let updatedSprite = updatedComponent;
        setAnimationsprite({...animationsprite, animation_states: updatedSprite})
        console.log(animationsprite)
        break;
      case "STATE":
        console.log("Updating State Components")
        let updatedState = currentStateFrameLayerTool.state;
        updatedState.frames = updatedComponent;
        setCurrentStateFrameLayerTool({...currentStateFrameLayerTool, state: updatedState})
        break;
      case "FRAME":
        console.log("Updating Frame Components")
        let updatedFrame = currentStateFrameLayerTool.frame;
        updatedFrame.layers = updatedComponent;
        setCurrentStateFrameLayerTool({...currentStateFrameLayerTool, frame: updatedFrame})
        break
      case "LAYER":
        console.log("Setting New Layer")
        let selectedLayer = updatedComponent;
        setCurrentStateFrameLayerTool({...currentStateFrameLayerTool, layer: selectedLayer})
        break
      case "TOOL":
        console.log("Setting New Tool")
        let selectedTool = updatedComponent;
        setCurrentStateFrameLayerTool({...currentStateFrameLayerTool, tool: selectedTool})
        break
    }

  }


  return (
    <div className="editscreen center">
      <Toolbar sflt={currentStateFrameLayerTool} setSFLT={setSFL}/>
      <Animatorbar {...props} sprite={animationsprite} sflt={currentStateFrameLayerTool} setSFLT={setSFL}/>
      <Filebar {...props} sflt={currentStateFrameLayerTool} setSFL={setSFL}/>
    </div>
  );
}

export default compose(
  graphql(GET_ANIMATIONSPRITE_BY_ID, { name: "GetDBAnimatationspriteByID" })
)(Editscreen);


//5f9108f9119cad1334c6624d