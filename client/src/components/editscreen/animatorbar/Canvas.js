import React, { useRef, useEffect, useState } from 'react';
import background from '../../../illustration/images/canvas_background.png'

function prelim(a, b, c){
  let flag = false;
  if("erasetool" == a){
    b.globalCompositeOperation = "destination-out";
    b.strokeStyle = "rgba(0,0,0,1)";
    b.lineWidth = 5
    flag = !flag
  }
  else if("painttool" == a){
    b.globalCompositeOperation = "source-over";
    b.strokeStyle = "round";
    b.lineWidth = 5 
    b.fillStyle = "black";
    flag = !flag
  }

  return flag;

}


function App(props) {
  let selectedTool = props.selectedTool; 
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const isCanvasInteractableRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 600;
    canvas.height = 500;
    canvas.style.background = "url(\""+ background +"\")"
    const context = canvas.getContext("2d")
    contextRef.current = context;
    console.log(contextRef)
    console.log(contextRef.current)
  }, [])

  const startDrawing = ({nativeEvent}) => {
    if(isCanvasInteractableRef.current){
      console.log(nativeEvent);
      const {offsetX, offsetY} = nativeEvent;
      contextRef.current.beginPath()
      contextRef.current.moveTo(offsetX, offsetY)
      setIsDrawing(true)
    }
    
  }

  const finishDrawing = () => {
    if(isCanvasInteractableRef.current){
      contextRef.current.closePath()
      setIsDrawing(false)
    }
  }

  const draw = ({nativeEvent}) => {
    if(isCanvasInteractableRef.current){
      console.log(nativeEvent);
      if(!isDrawing){
        return
      }
      const {offsetX, offsetY} = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY)
      contextRef.current.stroke()
    }
  }

  let isCanvasInteractable = prelim(selectedTool, contextRef.current, canvasRef.current ); 
  isCanvasInteractableRef.current = isCanvasInteractable;
  return (
    <div id="canvas-background">
      <canvas
        id="canvas"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
}

export default App;