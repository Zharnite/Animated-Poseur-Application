import React, { useState }from "react";
import { SketchPicker } from 'react-color';



const Tool = (props) => {
    console.log(props)
    let tool = props.tool;
    let selectedToolID = props.selectedTool;
    let setSelectedTool = props.setSelectedTool;
    console.log();
    let classname = "tool-icon"
    
    if(selectedToolID != null && selectedToolID == tool.id){
        classname = classname + "_selected"
    }
    return (
        <div className="tool-icon" className={classname} id={tool.id} onClick={setSelectedTool}>
            <img 
                src = {tool.src}
                alt = "icon"
            />
        </div>
    );
}


export default Tool;
