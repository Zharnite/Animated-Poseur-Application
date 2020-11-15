import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Tool from "./Tool";
import movetool from "../../../illustration/icons/ap/move_n.png";
import eyedroppertool from "../../../illustration/icons/ap/eyedropper_n.png";
import painttool from "../../../illustration/icons/ap/brush_n.png";
import erasetool from "../../../illustration/icons/ap/eraser_n.png";
import fillcolortool from "../../../illustration/icons/fill-color-50.png";

// import movetool from "../../../illustration/icons/group-objects-50.png";
// import eyedroppertool from "../../../illustration/icons/color-dropper-50.png";
// import painttool from "../../../illustration/icons/paint-50.png";
// import erasetool from "../../../illustration/icons/erase-50.png";
// import fillcolortool from "../../../illustration/icons/fill-color-50.png";

let tools = [
  {
    src: movetool,
    id: "movetool",
  },
  {
    src: painttool,
    id: "painttool",
  },
  {
    src: erasetool,
    id: "erasetool",
  },
  {
    src: eyedroppertool,
    id: "eyedroppertool",
  },
];


const Toolbar = (props) => {
 
  return (
    <div className="toolbar">
      {tools.map((tool) => (
        <Tool tool={tool} {...props} />
      ))}
      {/* <SketchPicker className="colorpickertool" 
        color={ pickerColor}
        onChange={handleChange }
        disableAlpha={true}
      /> */}
     <ColorPicker {...props}/>

  
    </div>
  );
};

export default Toolbar;
