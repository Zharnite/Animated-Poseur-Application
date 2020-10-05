import React, { useState }from "react";
import reactCSS from 'reactcss'
import Toolbar from "./toolbar/Toolbar.js"
import Filebar from "./filebar/Filebar.js"
import Animatorbar from "./animatorbar/Animatorbar.js"





function Editscreen (){


  return(
    <div className="editscreen center">
      <Toolbar/>
      <Animatorbar/>
      <Filebar/>
    </div>

  );
}


export default Editscreen;