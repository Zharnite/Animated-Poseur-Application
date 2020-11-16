import React, { useState, useContext} from "react";
import Frame from "./FrameCard";
import { Dropdown, DropdownButton } from "react-bootstrap";
import {EditingStateContext} from "../Editscreen"
import create_icon from "../../../illustration/icons/ap/create_n.png";
import add_icon from "../../../illustration/icons/ap/add_n.png";
import delete_icon from "../../../illustration/icons/ap/delete_n.png";
import play_icon from "../../../illustration/icons/ap/play_n.png";
import stop_icon from "../../../illustration/icons/ap/stop_n.png";


/*
  TODO:
    Expand addAnimationState() so that user can name it 
*/

const FramePanel = (props) => {
  const editingStateContext = useContext(EditingStateContext);
  const editingState = editingStateContext.editingState;
  const [isPlaying, setIsPlaying] = useState(false);
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
    //props.setSFLT(["SPRITE", newAnimationstates]);

  }

  const addFrame = () => {
    let newAnimationState = {...editingState.state}
    let newframe = {
      position: newAnimationState.frames.length,
      duration: 50,
      layers: [
        {
          index: 0,
          layer_name: "f1 layer1",
          isVisable: false,
          isLocked: false,
          data: ""
        }
      ]
    }
    newAnimationState.frames.push(newframe)
    let dispatchStateObj = {type: 'ADD', payload: ['STATE', newAnimationState]};
    let dispatchFrameObj = {type: 'SWITCH', payload: ['FRAME', newAnimationState.frames[0]]};
    let dispatchLayerObj = {type: 'SWITCH', payload: ['LAYER', newAnimationState.frames[0].layers[0]]};
    editingStateContext.editingStateDispatch(dispatchStateObj);
    editingStateContext.editingStateDispatch(dispatchFrameObj);
    editingStateContext.editingStateDispatch(dispatchLayerObj);
  }

  const stopPlayingHandler =()=>{
    setIsPlaying(false);
  }

  const startPlayingHandler =()=>{
    setIsPlaying(true);
  }


  return (
    <div id="frame-panel">
      <div id="frame-menu">
        {frames.map((frame) => (
          <Frame selecetedFrame = {editingState.frame} frame={frame}/>
        ))}
      </div>
      <div id="frame-controls">
        <DropdownButton key={"left"} id={`dropdown-button-drop-${"left"}`}  drop={"left"}title={state.animation_state_name}>
          {animationstates.map((animationstate) => (
            <Dropdown.Item>{animationstate.animation_state_name}</Dropdown.Item>
          ))}
        </DropdownButton>
        <img src={create_icon} alt="icon" onClick={addAnimationState}/>
        <img src={add_icon} alt="icon" onClick={addFrame}/>
        {
          isPlaying?<img src={stop_icon} alt="icon" onClick={stopPlayingHandler}/>
          :<img src={play_icon} alt="icon" onClick={startPlayingHandler}/>
        }
      </div>
    </div>
  );
};

export default FramePanel;
