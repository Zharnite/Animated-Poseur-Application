import React, { useState, useEffect } from "react";
import { flowRight as compose, random } from "lodash";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";



//todo:
//Learn how to switch from frame to frame without causing the application to crash
//Learn how to merge layer data into a single image
//
//

function Optionbar(props) {

  const [displayTitle, setDisplayTitle] = useState(false);

  const changeSpriteNameHandler = (e)=>{
    console.log(e)
    props.setAnimationspriteName(e.target.value)
  }
  const captureKeySpriteNameHandler = (e)=>{
    e.stopPropagation()
    if(e.key === "Enter"){
      setDisplayTitle(false)
    }
  }

  return (
    <div className="optionbar">
      <div id="spritename" onClick={() => setDisplayTitle(true)}>
      {
        displayTitle?     
        <input 
          type="text" 
          id="spritename-input" 
          value={props.animationspriteName} 
          onChange={(e)=>changeSpriteNameHandler(e)} 
          onKeyPress={(e)=>captureKeySpriteNameHandler(e)}
          onMouseLeave={()=>setDisplayTitle(false)}
          />
        :
        <h3>{props.animationspriteName}</h3>
      }
      </div>
     
    </div>
  );
}

export default compose(
)(Optionbar);


//5f9108f9119cad1334c6624d