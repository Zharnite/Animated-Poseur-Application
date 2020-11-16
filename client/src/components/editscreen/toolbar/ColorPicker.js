import React, { useState, useContext} from "react";
import { SketchPicker } from "react-color";
import {EditingStateContext} from "../Editscreen"

const ColorPicker = (props) => {
  const editingStateContext = useContext(EditingStateContext);
  const editingState = editingStateContext.editingState;
  const [displayPicker, setDisplayPicker] = useState(false);
  let color = editingState.color
  
  const handleChangeColor = (newColor) =>{
    document.getElementById("color").style.background = newColor.hex;
    let dispatchObj = {type: 'SWITCH', payload: ['COLOR', newColor.hex]};
    editingStateContext.editingStateDispatch(dispatchObj)
  }

  return (
    <div className="tool-icon">   
    
            <div id="color" onClick={()=>setDisplayPicker(!displayPicker)} />
        {
            displayPicker? 
            <div className="colorpickertool">
            <div onClick={()=>setDisplayPicker(false) }/>
            <SketchPicker color={color} onChange={ handleChangeColor } disableAlpha={true}/>
            </div>:null
        }
    </div>
  );
};

export default ColorPicker;
