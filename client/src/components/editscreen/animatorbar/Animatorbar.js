import React from "react";
import FramePanel from "./FramePanel";
import Canvas from "./CanvasMain";
// https://github.com/satansdeer/drawing-react-canvas


const Animatorbar = (props) => {

  return (
    <div className="animatorbar">
      <Canvas />
      <FramePanel {...props}/>
      <br></br>
      <img src="../public/tile_background.png" />
    </div>
  );
};

export default Animatorbar;
