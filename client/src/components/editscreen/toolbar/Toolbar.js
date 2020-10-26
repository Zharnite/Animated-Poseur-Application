import React, { useState } from "react";
import { PhotoshopPicker } from "react-color";
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
    src: colordroppertool,
    id: "colordroppertool",
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
    src: fillcolortool,
    id: "fillcolortool",
  },
];
const Toolbar = (props) => {
  
  return (
    <div className="toolbar">
      {tools.map((tool) => (
        <Tool
          tool={tool}
          {...props}
        />
      ))}

      {/* <div>
        <div
          className="swatch"
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
        ></div>
        {displayColorPicker ? (
          <div>
            <div onClick={() => setDisplayColorPicker(false)} />
            <PhotoshopPicker />
          </div>
        ) : null}
      </div> */}
    </div>
  );
};

export default Toolbar;
