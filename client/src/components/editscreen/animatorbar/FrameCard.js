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
  if(props.selecetedFrame == props.frame){
    id = id + "_selected";
  }
  return (
    <div className={id} onClick={e => console.log(props.frame)}>
      <div
      src={image}
      />
    </div>
    
  )
};

export default Frame;
