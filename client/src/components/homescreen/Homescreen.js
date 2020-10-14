import React, {useState} from "react";

import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { GET_DB_ANIMATIONSPRITE } from "../../cache/queries";
import { useQuery } from "@apollo/react-hooks";
import { PhotoshopPicker } from "react-color";

const Homescreen = (props) => {
  let animationSprites = [];
  const { loading, error, data, refetch } = useQuery(GET_DB_ANIMATIONSPRITE);
  if (loading) {
    /* Good place for a spinner or something */
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    animationSprites = data.getAllTodos;
  }
  // const [change, setChange] = useState({r:'0',g:'0',b:'0',a:'1'})
  const [color, setcolor] = useState({r:'0',g:'0',b:'0',a:'1'})
  const a = ()=>{
    console.log(a)
  }
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
