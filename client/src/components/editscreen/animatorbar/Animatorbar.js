import Sketch from "react-p5";
import React from "react";
import FramePanel from "./FramePanel";
// https://github.com/satansdeer/drawing-react-canvas

let glo = null;
let rgb = [0, 0, 0];
let brush_size = 1;

const setup = (p5, canvasParentRef) => {
  // use parent to render the canvas in this ref
  // (without that p5 will render the canvas outside of your component)
  p5.createCanvas(500, 500).parent(canvasParentRef);
  p5.loadImage("../public/tile_background.png", (img) => {
    p5.image(img, 0, 0);
  });
  p5.background(150);
  p5.stroke(255);
  p5.strokeWeight(1);
};

const draw = (p5) => {
  p5.stroke(rgb[0], rgb[1], rgb[2]);
  p5.strokeWeight(brush_size);
  if (p5.mouseIsPressed === true) {
    // pg = p5.createGraphics(100, 100);
    var a = p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
  }
  // p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
  // NOTE: Do not use setState in the draw function or in functions that are executed
  // in the draw function...
  // please use normal variables or class properties for these purposes
};

const changeSize = (c) => {
  var a = document.getElementById("sizer");
  console.log(a.value);
  brush_size = 0 + a.value;

  // p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
  // NOTE: Do not use setState in the draw function or in functions that are executed
  // in the draw function...
  // please use normal variables or class properties for these purposes
};

const changeColor = (c, cc) => {
  console.log(c);
  console.log(cc);
  if (c == 1) rgb = [200, 0, 0];
  if (c == 2) rgb = [0, 255, 0];
  if (c == 3) rgb = [24, 100, 255];
  if (c == 4) rgb = [0, 0, 0];
};

const foo = (props) => {
  let animationsprite = props.animationsprite;
  return (
    <div className="animatorbar">
      <Sketch setup={setup} draw={draw} />
      <FramePanel animationsprite={animationsprite} />
      <button onClick={changeColor.bind(this, 1)}> Red </button>
      <button onClick={changeColor.bind(this, 2)}> Green </button>
      <button onClick={changeColor.bind(this, 3)}> Blue </button>
      <button onClick={changeColor.bind(this, 4)}> Black </button>
      <br></br>
      <input id="sizer" type="text" />
      <button onClick={changeSize}> Change Size </button>
      <img src="../public/tile_background.png" />
    </div>
  );
};

export default foo;
