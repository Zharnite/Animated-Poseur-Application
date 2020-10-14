import React from "react";
import FramePanel from "./FramePanel";
import Canvas from "./CanvasMain";
// https://github.com/satansdeer/drawing-react-canvas

let glo = null;
let rgb = [0, 0, 0];
let brush_size = 1;

const Animatorbar = (props) => {
  let animationsprite = props.animationsprite;
  let selectedTool = props.selectedTool;
  return (
    <div className="animatorbar">
      <Canvas selectedTool={selectedTool}/>
      <FramePanel animationsprite={animationsprite} />
      <br></br>
      <img src="../public/tile_background.png" />
    </div>
  );
};

export default Animatorbar;
