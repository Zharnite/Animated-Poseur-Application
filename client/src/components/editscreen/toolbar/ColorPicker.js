import React, { useState } from "react";
import { SketchPicker } from "react-color";


const ColorPicker = (props) => {
  const [pickerColor, setPickerColor] = useState("000");
  const [displayPicker, setDisplayPicker] = useState(false);
  let color = props.editingStateAccess.editingState.color
  let setEditingState = props.editingStateAccess.setEditingState;
  
  const handleChangeColor = (newColor) =>{
    document.getElementById("color").style.background = newColor.hex;
    setEditingState(["COLOR", newColor.hex])
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
