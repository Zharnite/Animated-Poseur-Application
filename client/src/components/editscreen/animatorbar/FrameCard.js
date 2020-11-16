import React, {useContext} from "react";
import {EditingStateContext} from "../Editscreen"


function mergeFrameLayers(frame){
  let tempCanvas = document.createElement("canvas");
  let tempContext = tempCanvas.getContext("2d");
  frame.layers.forEach(layer => {
    const image = new Image()
    image.src = layer.data;
    tempContext.drawImage(image,0,0)
  });
  return tempCanvas.toDataURL()
}

const Frame = (props) => {
  const editingStateContext = useContext(EditingStateContext);

  //let data = mergeFrameLayers(props.frame);
  // let image = new Image()
  // image = data;
  //console.log(data);
  let id = "frame-card";
  let className = "frame-card-number";
  //console.log("Frame Selected", props.selecetedFrame)
  if(props.selecetedFrame == props.frame){
    className = className + " selected";
  }

  const switchFrameHandler = () =>{
    let dispatchFrameObj = {type: 'SWITCH', payload: ['FRAME', props.frame]};
    let dispatchLayerObj = {type: 'SWITCH', payload: ['LAYER', props.frame.layers[0]]};
    editingStateContext.editingStateDispatch(dispatchFrameObj);
    editingStateContext.editingStateDispatch(dispatchLayerObj);
  }
  
  return (
    <div className={id} onClick={switchFrameHandler}>
      <div className={className}>{props.frame.position}</div>
      <div
      src=""
      />
    </div>
    
  )
};

export default Frame;
