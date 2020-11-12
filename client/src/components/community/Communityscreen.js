import React, {useState} from "react";
import { Redirect } from "react-router-dom";


// import { flowRight as compose, random } from "lodash";
// import { PhotoshopPicker } from "react-color";

const Homescreen = (props) => {
  //console.log(props)

  // const [change, setChange] = useState({r:'0',g:'0',b:'0',a:'1'})
  if (!props.auth) {
    return <Redirect to="/login" />;
  } 
  return (
    <div className="homescreen">
      <h1 onClick={console.log("as")}> HomeScreen </h1>
      {/* <div>
        <div id="coverr"></div>
        {/* <PhotoshopPicker color={color} onChange ={(a) => console.log(a)} /> */}
      {/* </div>  */}

      
    </div>
  );
};

export default Homescreen;