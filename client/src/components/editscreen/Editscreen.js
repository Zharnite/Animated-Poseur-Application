import React, { useState, useEffect } from "react";
import reactCSS from "reactcss";
import Toolbar from "./toolbar/Toolbar.js";
import Filebar from "./filebar/Filebar.js";
import Animatorbar from "./animatorbar/Animatorbar.js";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { GET_ANIMATIONSPRITE_BY_ID } from "../../cache/queries";
import { useQuery } from "@apollo/react-hooks";


//todo:
//Learn how to switch from frame to frame without causing the application to crash
//Learn how to merge layer data into a single image
//
//

function Editscreen(props) {
 
  let optionalPath = props.match.params.id;
  let _id = optionalPath.substring(1,optionalPath.length)
  //console.log(_id)
  // const [animationsprite, setAnimationsprite] = useState(null);
  // const [currentStateFrameLayerTool, setCurrentStateFrameLayerTool] = useState(null);
  // const { loading, error, data, refetch } = useQuery(GET_ANIMATIONSPRITE_BY_ID, {variables:  {_id} ,});
  // if(loading) {  }
  // if(error) { console.log(error); }
  // if(data) { 
  //   console.log(data)
  //   let sprite = data.GetDBAnimatationspriteByID
  //   setAnimationsprite(sprite);
  //   setCurrentStateFrameLayerTool({state : animationsprite.animation_states[0], frame : animationsprite.animation_states[0].frames[0], layer : animationsprite.animation_states[0].frames[0].layers[0], tool:null});
  // }

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
              "position": 0,
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
  const [currentStateFrameLayerTool, setCurrentStateFrameLayerTool] = useState({state : animationsprite.animation_states[0], frame : animationsprite.animation_states[0].frames[0], layer : animationsprite.animation_states[0].frames[0].layers[0], tool:null});

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
  const setSFL=(x, componentSwitch=false)=>{
    const [componentToUpdate, updatedComponent] = x
    console.log(setSFL)
    if(componentSwitch){
      switch(componentToUpdate){
        case "FRAME":
          console.log("Switching Frames")
          setCurrentStateFrameLayerTool({...currentStateFrameLayerTool, frame: updatedComponent})
          setCurrentStateFrameLayerTool({...currentStateFrameLayerTool, layer: updatedComponent.layers[0]})
          break;
        case "STATE":
          break;
      }
      return
    }

    switch(componentToUpdate){
      case "SPRITE":
        console.log("Updating Current Sprite Components")
        let updatedSprite = updatedComponent;
        setAnimationsprite({...animationsprite, animation_states: updatedSprite})
        console.log(animationsprite)
        break;
      case "STATE":
        console.log("Updating Current State Components")
        let updatedState = currentStateFrameLayerTool.state;
        updatedState.frames = updatedComponent;
        setCurrentStateFrameLayerTool({...currentStateFrameLayerTool, state: updatedState})
        break;
      case "FRAME":
        console.log("Updating Current Frame Components")
        let updatedFrame = updatedComponent;
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