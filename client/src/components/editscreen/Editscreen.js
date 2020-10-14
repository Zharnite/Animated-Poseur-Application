import React, { useState } from "react";
import reactCSS from "reactcss";
import Toolbar from "./toolbar/Toolbar.js";
import Filebar from "./filebar/Filebar.js";
import Animatorbar from "./animatorbar/Animatorbar.js";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { GET_DB_ANIMATIONSPRITE } from "../../cache/queries";


/*
* @param: Object animationsprite (JSON)
* @returns: array of selected animation-state, frame, and layer
*/
function findSelectedComponents(animationsprite){
  let animation_state = animationsprite.animation_states;
  console.log(animation_state)
  let animation_state_index = animation_state.findIndex( (state) => state.selected);
  if(animation_state_index == -1) animation_state_index = 0;
  const selected_animation_state = animation_state[animation_state_index];

  let frames = selected_animation_state.frames
  console.log(frames)
  let frames_index = frames.findIndex( (frame) => frame.selected);
  if(frames_index == -1) frames_index = 0;
  const selected_frame = frames[frames_index];

  let layers = selected_frame.layers
  console.log(layers)
  let layers_index = layers.findIndex( (layer) => layer.selected);
  if(layers_index == -1) layers_index = 0;
  const selected_layer = layers[layers_index];

  return [selected_animation_state, selected_frame, selected_layer]
}

function findSelectedFrame(animation_state){
  let frames = animation_state.frames
  let frames_index = frames.findIndex( (state) => state.selected);
  if(frames_index == -1) frames_index = 0;
  return frames[frames_index];
}


function Editscreen(props) {
  let [selectedAnimationStateJSON, selectedFrameJSON, selectedLayerJSON] = findSelectedComponents(animationsprite);

  const [selectedTool, setSelectedTool] = useState(null);
  const [brushSize, setBrushSize] = useState(1);
  const [brushColor, setBrushColor] = useState([0, 0, 0]);
  const [animationsprite, setAnimationsprite] = useState(
    {
      "sprite_name": "SpriteSheet",
      "public": true,
      "width": 64,
      "height": 128,
      "animation_states":[
          {
              "animation_states_name": "Default",
              "selected": true,
              "frames" :[
                      {
                          "position" : 1,
                          "duration": 42,
                          "selected": true,
                          "layers":[
                              {
                                  "layer_name": "layer 1",
                                  "isVisable": true,
                                  "isLocked": false,
                                  "selected": true,
                                  "data": "image/png;base64,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"
                              },
                              {
                                  "layer_name": "layer 2",
                                  "isVisable": true,
                                  "isLocked": false,
                                  "selected": false,
                                  "data": ""
                              },
                              {
                                "layer_name": "layer 3",
                                "isVisable": true,
                                "isLocked": false,
                                "selected": false,
                                "data": ""
                            }
                          ]
                      }
              ]
          },
          {
              "animation_states_name": "Jumping",
              "selected": false,
              "frames" :[
                      {
                          "position" : 1,
                          "duration": 42,
                          "selected": true,
                          "layers":[
                              {
                                  "layer_name": "layer 1",
                                  "isVisable": true,
                                  "isLocked": false,
                                  "selected": true,
                                  "data": ""
                              },
                              {
                                  "layer_name": "layer 2",
                                  "isVisable": true,
                                  "isLocked": false,
                                  "selected": false,
                                  "data": ""
                              },
                              {
                                "layer_name": "layer 3",
                                "isVisable": true,
                                "isLocked": false,
                                "selected": false,
                                "data": ""
                            }
                          ]
                      }
              ]

          }
      ]
  }  
  );
  
  
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [selectedLayerName, setSelectedLayerName] = useState(null);





  return (
    <div className="editscreen center">
      <Toolbar animationsprite={animationsprite} selectedTool={selectedTool} setSelectedTool={setSelectedTool} brushColor={brushColor}/>
      <Animatorbar selectedTool={selectedTool}  animationsprite={animationsprite} />
      <Filebar selectedFrameJSON={selectedFrameJSON}/>
    </div>
  );
}

export default compose(
  graphql(GET_DB_ANIMATIONSPRITE, { name: "GetDBAnimatationsprite" })
)(Editscreen);
