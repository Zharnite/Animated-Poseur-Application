import React, { useState, useContext } from "react";
import { SketchPicker } from "react-color";
import {EditingStateContext} from "../Editscreen"

const Tool = (props) => {
  const editingStateContext = useContext(EditingStateContext);
  const editingState = editingStateContext.editingState;
  let classname = "tool-icon";

  const switchToolHandler = () =>{
    let dispatchObj = {type: 'SWITCH', payload: ['TOOL', props.tool.id]};
    editingStateContext.editingStateDispatch(dispatchObj)
  }

  if (editingState && editingState.tool != null && editingState.tool == props.tool.id) {
    classname = classname + "_selected";
  }
  return (
    <div
      className={classname}
      onClick={switchToolHandler}
    >
      <img src={props.tool.src} alt="icon" className="toobar-image"/>
    </div>
  );
};

export default Tool;
