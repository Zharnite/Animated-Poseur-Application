import React, { useState } from "react";
import Frame from "./FrameCard";
import { Dropdown, DropdownButton } from "react-bootstrap";

const FramePanel = (props) => {
  
  let animationstates = props.sprite.animation_states; 
  let state = props.sflt.state
  let frames = props.sflt.state.frames;

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
    console.log(newAnimationstates)
    props.setSFLT(["SPRITE", newAnimationstates]);

  }



  return (
    <div id="frame-panel">
      <div id="frame-menu">
        {frames.map((currentFrame) => (
          <Frame frame={currentFrame} />
        ))}
      </div>
      <DropdownButton id="dropdown-basic-button" title={state.animation_state_name}>
        {frames.map((frame) => (
          <Frame frame={frame} />
        ))}
        {animationstates.map((animationstate) => (
          <Dropdown.Item>{animationstate.animation_state_name}</Dropdown.Item>
        ))}
      </DropdownButton>
      <button onClick={e => addAnimationState()}>Create State</button>
      <button>Add frame</button>
      <button>Play/Stop</button>
      <button>Delete State</button>
    </div>
  );
};

export default FramePanel;
