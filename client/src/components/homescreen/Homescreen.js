import React, {useState} from "react";

// import { flowRight as compose, random } from "lodash";
// import { PhotoshopPicker } from "react-color";

const Homescreen = () => {
  //console.log(props)

  // const [change, setChange] = useState({r:'0',g:'0',b:'0',a:'1'})
  return (
    <div className="homescreen">
      <h1> HomeScreen </h1>
      <div>
        <div id="coverr"></div>
        {/* <PhotoshopPicker color={color} onChange ={(a) => console.log(a)} /> */}
      </div>
      
    </div>
  );
};

export default Homescreen;