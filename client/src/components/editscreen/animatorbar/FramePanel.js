import React, { useState } from "react";
import Frame from "./FrameCard";
import { Dropdown, DropdownButton } from "react-bootstrap";

const FramePanel = (props) => {
  let animationsprite = props.animationsprite;
  let animation_states = animationsprite.animation_states;
  console.log(props);
  return (
    <div id="frame-panel">
      <div id="frame-menu">
        {animation_states[0].frames.map((currentFrame) => (
          <Frame frame={currentFrame} />
        ))}
      </div>
      <DropdownButton id="dropdown-basic-button" title="States">
        <Dropdown.Item href="#/action-1">Original</Dropdown.Item>
      </DropdownButton>
      <button>Create State</button>
      <button>Add frame</button>
      <button>Play/Stop</button>
      <button>Delete State</button>
    </div>
  );
};

export default FramePanel;
