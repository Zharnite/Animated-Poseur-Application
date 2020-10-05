import React, { useState }from "react";
import { PhotoshopPicker } from 'react-color';
import Tool from './Tool'
import grouptool from '../../../illustration/icons/group-objects-50.png'
import colordroppertool from "../../../illustration/icons/color-dropper-50.png"
import painttool from "../../../illustration/icons/paint-50.png"
import erasetool from "../../../illustration/icons/erase-50.png"
import fillcolortool from "../../../illustration/icons/fill-color-50.png"


// const changeColor = (c, cc) => {
//   console.log(c);
//   console.log(cc);
//   if(c == 1) rgb = [200,0,0]  
//   if(c == 2) rgb = [0,255,0]  
//   if(c == 3) rgb = [24,100,255]  
//   if(c == 4) rgb = [0,0,0]  
// };

let tools = [
  {
    src: grouptool,
    id:"grouptool"
  },
  {
    src: colordroppertool,
    id:"colordroppertool"
  },
  {
    src: painttool,
    id:"painttool"
  },
  {
    src: erasetool,
    id:"erasetool"
  },
  {
    src: fillcolortool,
    id:"fillcolortool"
  },
]
const Toolbar = () => {

  const [selectedTool, setSelectedTool] = useState(null);
  const [brushSize, setBrushSize] = useState(1);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState([0,0,0]);
  console.log(tools)

    return (
      <div className="toolbar">
        {tools.map(tool => ( 
          <Tool tool={tool} setSelectedTool={() => setSelectedTool(tool.id)} selectedTool={selectedTool}/>
        ))
        }

        <div>
          <div className="swatch" onClick={() => setDisplayColorPicker(!displayColorPicker) }>
          </div>
            { displayColorPicker ? 
              <div>
                <div onClick={() => setDisplayColorPicker(false) }/>
                  <PhotoshopPicker color={ color }  />
              </div> : null 
            }
        </div>
        </div>
    );
}


export default Toolbar;
