import React from "react";
import FramePanel from "./FramePanel";
import CanvasPanel from "./CanvasPanel";
// https://github.com/satansdeer/drawing-react-canvas


const Animatorbar = (props) => {

  return (
    <div className="animatorbar">
      <CanvasPanel {...props}/>
      <FramePanel {...props}/>
    </div>
  );
};

export default Animatorbar;
