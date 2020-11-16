import React, { useState, useEffect, useReducer} from "react";
import reactCSS from "reactcss";
import Toolbar from "./toolbar/Toolbar.js";
import Filebar from "./filebar/Filebar.js";
import Optionbar from "./optionbar/Optionbar";
import Animatorbar from "./animatorbar/Animatorbar.js";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { GET_ANIMATIONSPRITE_BY_ID } from "../../cache/queries";
import { useQuery } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";

export const EditingStateContext = React.createContext();


const addToEditingStateObject = (editingState, args)=>{
  const [componentToAdd, component] = args
  switch (componentToAdd) {
    case "STATE":
      console.log("Adding component to state");
      return{...editingState, state:component}
    case "FRAME":
      console.log("Adding component to frame");
      return{...editingState, frame:component}
  }
  return editingState;
}

const switchEditingStateObject = (editingState, args) =>{
  const [componentToSwitch, component] = args
  switch (componentToSwitch) {
    case "FRAME":
      console.log("Switch frame");
      return{...editingState, frame:component}
    case "LAYER":
      console.log("Switch layer");
      return{...editingState, layer:component}
    case "TOOL":
      console.log("Switch tool");
      return{...editingState, tool:component}
    case "COLOR":
      console.log("Switch color");
      return{...editingState, color:component}
  }
  return editingState;
}

const deleteEditingStateObject = (editingState, args) =>{
  const [componentToDelete, component] = args;
  switch (componentToDelete) {
    case "FRAME":
      console.log("Deleting component from frame");
      return{...editingState, frame:component}
  }
}


const reducer = (state, action) =>{
  console.log(state);
  switch (action.type){
    case 'ADD':
      return addToEditingStateObject(state, action.payload)
    case 'DELETE':
      return deleteEditingStateObject(state, action.payload)
    case 'SWITCH':
      return switchEditingStateObject(state, action.payload)
    default:
      console.error("Error")
  }
}


function Editscreen(props) {
  // const [animationsprite, setAnimationsprite] = useState(null);
  // const [currentStateFrameLayerTool, setCurrentStateFrameLayerTool] = useState(null);
  // const { loading, error, data } = useQuery(GET_ANIMATIONSPRITE_BY_ID, {variables:  {_id} ,});

  // useEffect(async () => {
  //   const result = await get('/api/blah-blah-blah')

  //   // run your query here now that the await has resolved
  // }, [someDependency])

  // if(loading) {  }
  // if(error) { console.log(error); }
  // if(data) {
  //   console.log(data)
  //   let sprite = data.GetDBAnimatationspriteByID
  //   setAnimationsprite(sprite);
  //   if(sprite != null)setCurrentStateFrameLayerTool({state : data.GetDBAnimatationspriteByID.animation_states[0], frame : data.GetDBAnimatationspriteByID.animation_states[0].frames[0], layer : data.GetDBAnimatationspriteByID.animation_states[0].frames[0].layers[0], tool:null});
  //   else setCurrentStateFrameLayerTool({state : {}, frame : {}, layer : {}, tool:null});

  // }

  const [animationsprite, setAnimationsprite] = useState(props.location.animationsprite)
  // let dummySprite = {
  //   _id: "5f96e8ffcadaf904cae9c34b",
  //   owner: "5f8cf080c3f2491bf2c4ff08",
  //   sprite_name: "tytytyty",
  //   isPublic: true,
  //   width: 250,
  //   height: 250,
  //   animation_states: [
  //     {
  //       animation_state_name: "default",
  //       frames: [
  //         {
  //           position: 0,
  //           duration: 50,
  //           layers: [
  //             {
  //               layer_name: "layer1",
  //               index: 0,
  //               isVisable: false,
  //               isLocked: false,
  //               data: "",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // };
  // const [animationsprite, setAnimationsprite] = useState(dummySprite);
  const [animationspriteName, setAnimationspriteName] = useState(animationsprite.sprite_name);
  let spriteEditingState = {
    stateindex: 0,
    state: animationsprite.animation_states[0],
    frame: animationsprite.animation_states[0].frames[0],
    layer: animationsprite.animation_states[0].frames[0].layers[0],
    tool: null,
    color: "#000",
    hello: []
  };
  //let dummyEditingState = {animationsprite:dummySprite, toolConfig: {}}
  const [editingState, dispatch] = useReducer(reducer, spriteEditingState);
  const addLayer = () =>{
    let h = {...editingState.frame}
    console.log(h)
    const newLayer = {
      layer_name: "layer",
      index: -1,
      isVisable: true,
      isLocked: false,
    };
    h.layers.push(newLayer)
    dispatch({type: 'LAYER',payload: h});
  }

  if (!props.auth) {
    return <Redirect to="/login" />;
  }

  return (
    <EditingStateContext.Provider value ={{editingState: editingState, editingStateDispatch:dispatch}}>
      <div className="center">
      <Optionbar animationspriteName={animationspriteName} setAnimationspriteName={setAnimationspriteName}/>
      <div className="editscreen center">
        <Toolbar/>
        <Animatorbar
          {...props}
          sprite={animationsprite}
        />
        <Filebar {...props} />
      </div>
    </div>

    </EditingStateContext.Provider>
  );
}


export default compose(
  graphql(GET_ANIMATIONSPRITE_BY_ID, { name: "GetDBAnimatationspriteByID" })
)(Editscreen);