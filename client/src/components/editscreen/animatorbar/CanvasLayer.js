import React, { useRef, useEffect, useState } from 'react';

  
function canvasToolOption(selectedTool, context){
  console.log(selectedTool + " selected")
  if("erasetool" == selectedTool){
    context.globalCompositeOperation = "destination-out";
    context.strokeStyle = "rgba(0,0,0,1)";
  }
  else if("painttool" == selectedTool){
    console.log(context)
    context.globalCompositeOperation = "source-over";
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 5;
  }
  else{

  }

  

}


const App =(props)=>{
  const [isDrawing, setIsDrawing] = useState(false)
  const contextRef = useRef(null)

  const selectedTool = props.sflt.tool;
  const selectedLayer = props.sflt.layer;
  let canEditLayer;
  selectedTool == null || selectedLayer == null? canEditLayer = false : canEditLayer = true; 
  if(canEditLayer){
    let canvas = document.getElementById("wlayer" + selectedLayer.index);
    let context = canvas.getContext("2d");
    canvasToolOption(selectedTool, context)
    contextRef.current = context;

  }

  console.log(canEditLayer);
  

  const startDrawing = (event) => {
    if(canEditLayer){
      
      const {offsetX, offsetY} = event.nativeEvent;
      console.log(offsetX + "," + offsetY)
      contextRef.current.beginPath()
      contextRef.current.moveTo(offsetX, offsetY)
      setIsDrawing(true)

    }
  }

  const finishDrawing = () => {
    if(!isDrawing){
      return
    }
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = (event) => {
    if(!isDrawing){
      return
    }
    const {offsetX, offsetY} = event.nativeEvent;
    console.log(offsetX + "," + offsetY)
    console.log(contextRef.current);
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }
  return (
    <canvas 
      id={"wlayer" + props.layer.index}
      class="wcanvas-layer"
      onMouseDown={e => startDrawing(e)}
      onMouseMove={e => draw(e)}
      onMouseUp={finishDrawing}
      width={"800px"}
      height={"500px"}
    />
  );
}

export default App;