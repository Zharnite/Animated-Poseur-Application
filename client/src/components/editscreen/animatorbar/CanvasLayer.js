import React, { useRef, useEffect, useState } from 'react';

  
function canvasToolOption(selectedTool, context, optional){
  console.log(selectedTool + " selected")
  
  if("grouptool" == selectedTool){
    return
    
  }
  else if("erasetool" == selectedTool){
    context.globalCompositeOperation = "destination-out";
    context.strokeStyle = "rgba(0,0,0,1)";
  }
  else if("painttool" == selectedTool){
    console.log(context)
    context.globalCompositeOperation = "source-over";
    context.lineCap = "round"
    context.strokeStyle = optional.color;
    context.lineWidth = 5;
  }
  else{

    return
  }

  

}


const App =(props)=>{
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const setEditingState = props.editingStateAccess.setEditingState;
  const editingState = props.editingStateAccess.editingState;


  let selectedTool = editingState.tool;
  let selectedLayer = editingState.layer;
  console.log(selectedTool)
  console.log(selectedLayer)

  
  let canEditLayer;
  selectedTool == null || selectedLayer == null? canEditLayer = false : canEditLayer = true; 
  if(canEditLayer){
    let canvas = document.getElementById("wlayer" + selectedLayer.index);
    let context = canvas.getContext("2d");
    let config = {
      color: editingState.color
    }
    canvasToolOption(selectedTool, context, config)
    canvasRef.current = canvas;
    contextRef.current = context;

  }

  //console.log(canEditLayer);
  

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
    let newLayer = editingState.layer;
    newLayer.data = canvasRef.current.toDataURL();
    setEditingState(["LAYER", newLayer])
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
      width={""+ props.sprite.width + "px"}
      height={""+ props.sprite.height + "px"}
    />
  );
}

export default App;