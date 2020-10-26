import React, { useRef, useEffect, useState } from 'react';

  
const App =(props)=>{
  //console.log(props)
  let id = "canvaslayer" + props.layer.pos
  return (
    <canvas 
      class="canvas-layer"
      id={id}
    />
  );
}

export default App;