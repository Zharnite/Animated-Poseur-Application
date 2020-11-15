import React from "react";


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

  let data = mergeFrameLayers(props.frame);
  //console.log(data);
  let image = new Image()
  image = data;
  let id = "frame-card";
  let className = "frame-card-number";
  //console.log("Frame Selected", props.selecetedFrame)
  if(props.selecetedFrame == props.frame){
    className = className + " selected";
  }
  
  return (
    <div className={id} onClick={() => props.setEditingState(["FRAME",props.frame],true)}>
      <div className={className}>{props.frame.position}</div>
      <div
      src={image}
      />
    </div>
    
  )
};

export default Frame;
