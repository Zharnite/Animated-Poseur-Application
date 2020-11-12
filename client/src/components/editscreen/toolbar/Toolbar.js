import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Tool from "./Tool";
import grouptool from "../../../illustration/icons/group-objects-50.png";
import colordroppertool from "../../../illustration/icons/color-dropper-50.png";
import painttool from "../../../illustration/icons/paint-50.png";
import erasetool from "../../../illustration/icons/erase-50.png";
import fillcolortool from "../../../illustration/icons/fill-color-50.png";

let tools = [
  {
    src: grouptool,
    id: "grouptool",
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
    src: colordroppertool,
    id: "colordroppertool",
  },
];


const Toolbar = (props) => {
  const [pickerColor, setPickerColor] = useState("fff")
  const [displayPicker, setDisplayPicker] = useState(false)

  const handlePickerChange = (color, event) =>{
    setPickerColor(color.hex)
    console.log(color);
    console.log(event);
  }





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
