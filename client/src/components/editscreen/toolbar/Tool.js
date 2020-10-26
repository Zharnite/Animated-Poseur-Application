import React, { useState } from "react";
import { SketchPicker } from "react-color";

const Tool = (props) => {
  let classname = "tool-icon";
  if (props.sflt.tool != null && props.sflt.tool == props.tool.id) {
    classname = classname + "_selected";
  }
  return (
    <div
      className={classname}
      onClick={() => props.setSFLT(["TOOL", props.tool.id])}
    >
      <img src={props.tool.src} alt="icon" />
    </div>
  );
};

export default Tool;
