import React, { useState } from "react";
import { SketchPicker } from "react-color";

const Tool = (props) => {
  let editingState = props.editingStateAccess.editingState;
  let setEditingState = props.editingStateAccess.setEditingState;
  let classname = "tool-icon";
  if (editingState && editingState.tool != null && editingState.tool == props.tool.id) {
    classname = classname + "_selected";
  }
  return (
    <div
      className={classname}
      onClick={() => setEditingState("SWITCH", ["TOOL", props.tool.id])}
    >
      <img src={props.tool.src} alt="icon" className="toobar-image"/>
    </div>
  );
};

export default Tool;
