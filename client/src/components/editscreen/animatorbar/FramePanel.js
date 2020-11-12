import React, { useState } from "react";
import Frame from "./FrameCard";
import { Dropdown, DropdownButton } from "react-bootstrap";

/*
  TODO:
    Expand addAnimationState() so that user can name it 
*/

const FramePanel = (props) => {
  const setEditingState = props.editingStateAccess.setEditingState;
  const editingState = props.editingStateAccess.editingState;

  let animationstates = props.sprite.animation_states; 
  let state = editingState.state
  let frames = editingState.state.frames;

  const addAnimationState = () =>{ 
    let newAnimationstates = animationstates;
    console.log(newAnimationstates)
    let newState = { 
        animation_state_name: "State",
        frames: [
          {
            position: 1,
            duration: 50,
            layers: [
              {
                layer_name: "layer1",
                isVisable: false,
                isLocked: false,
                data: ""
              }
            ]
          }
        ]
    }
    newAnimationstates.push(newState);
    props.setSFLT(["SPRITE", newAnimationstates]);

  }

  const addFrame = () => {
    let newFrames = frames
    let newframe = {
      position: frames.length,
      duration: 50,
      layers: [
        {
          index: 0,
          layer_name: "layer 1",
          isVisable: false,
          isLocked: false,
          data: ""
        }
      ]
    }
    newFrames.push(newframe);
    setEditingState(["STATE", newFrames]);
  }



  return (
    <div id="frame-panel">
      <div id="frame-menu">
        {frames.map((frame) => (
          <Frame selecetedFrame = {editingState.frame} frame={frame} setEditingState={setEditingState}/>
        ))}
      </div>
      <DropdownButton variant="secondary" key={"left"} id={`dropdown-button-drop-${"left"}`}  drop={"left"}title={state.animation_state_name}>
        {animationstates.map((animationstate) => (
          <Dropdown.Item>{animationstate.animation_state_name}</Dropdown.Item>
        ))}
      </DropdownButton>
      <button onClick={e => addAnimationState()}>Create State</button>
      <button onClick={e => addFrame()}>Add frame</button>
      <button>Play/Stop</button>
      <button>Delete State</button>
    </div>
  );
};

export default FramePanel;
