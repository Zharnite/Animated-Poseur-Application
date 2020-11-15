import React, { useState, useEffect} from "react";
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

//todo:
//Learn how to switch from frame to frame without causing the application to crash
//Learn how to merge layer data into a single image
//
//

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

  //const [animationsprite, setAnimationsprite] = useState(props.location.animationsprite)
  let dummySprite = {
    _id: "5f96e8ffcadaf904cae9c34b",
    owner: "5f8cf080c3f2491bf2c4ff08",
    sprite_name: "tytytyty",
    isPublic: true,
    width: 250,
    height: 250,
    animation_states: [
      {
        animation_state_name: "default",
        frames: [
          {
            position: 0,
            duration: 50,
            layers: [
              {
                layer_name: "layer1",
                index: 0,
                isVisable: false,
                isLocked: false,
                data: "",
              },
            ],
          },
        ],
      },
    ],
  };
  const [animationsprite, setAnimationsprite] = useState(dummySprite);
  const [animationspriteName, setAnimationspriteName] = useState(
    animationsprite.sprite_name
  );
  let dummystate = {
    stateindex: 0,
    state: animationsprite.animation_states[0],
    frame: animationsprite.animation_states[0].frames[0],
    layer: animationsprite.animation_states[0].frames[0].layers[0],
    tool: null,
    color: "#000",
  };
  const [editingState, setEditingState] = useState(dummystate);

  useEffect(() => {
    console.log("useeffect", editingState);
    //setEditingState(editingState)
  }, [animationsprite, editingState]);
  // const addComponent = (componentToAdd, newComponent) => {
  //   let updatedFrame;
  //   switch (componentToAdd) {
  //     case "STATE":
  //       console.log("Updating Current State Components", updatedComponent);
  //       let updatedState = editingState.state;
  //       updatedState.frames = updatedComponent;
  //       setEditingState({ ...editingState, state: updatedState });
  //       let newAnimationsprite = animationsprite;
  //       newAnimationsprite.animation_states[
  //         editingState.stateindex
  //       ] = setAnimationsprite({ ...animationsprite, f: updatedState });
  //       break;
  //     case "FRAME":
  //       console.log("Updating Current Frame Components", updatedComponent);
  //       updatedFrame = updatedComponent;
  //       setEditingState({ ...editingState, frame: updatedFrame });
  //       break;
  //     case "LAYER":
  //       console.log("Updating Current Frame Components", updatedComponent);
  //       updatedFrame = updatedComponent;
  //       setEditingState({ ...editingState, frame: updatedFrame });
  //       break;
  //   }
  // };

  const addToEditingStateObject = (componentToAdd, component)=>{
    switch (componentToAdd) {
      case "STATE":
        console.log("Adding to States", component);
        //animationsprite.animation_states.append( componentToAdd
        //setEditingState({ ...editingState, state: newState});
        break;
      case "FRAME":
        console.log("Adding to Frames", component);
        //setEditingState({ ...editingState, frame: newState });
        break;
      case "LAYER":
        console.log("Adding to layer: ", component);
        // let newFrame = editingState.frame;
        // newFrame.layers.push(component);
        setEditingState({...editingState, frame:component});
        break;
    }
  }

  const switchEditingStateObject = (componentToSwitch, component) =>{
    switch (componentToSwitch) {
      case "LAYER":
        console.log("Switch layer to: ", component);
        setEditingState({ ...editingState, layer: component});
        break;
      case "TOOL":
        console.log("Switching tool to : ", component);
        setEditingState({ ...editingState, tool: component});
        break;
      case "COLOR":
        console.log("Switching color to ", component);
        setEditingState({ ...editingState, color: component});
        console.log("Switching color to ", editingState);
        break;

    }
    //TODO: IMPLEMENT
  }

  const updateEditingStateObject =(stateToUpdate, newState)=>{
    switch (stateToUpdate) {
      case "STATE":
        console.log("Updating State", newState);
        setEditingState({ ...editingState, state: newState});
        break;
      case "FRAME":
        console.log("Updating Frame", newState);
        setEditingState({ ...editingState, frame: newState });
        break;
      case "LAYER":
        console.log("Updating Layer", newState);
        setEditingState({ ...editingState, layer: newState });
        break;
    }
    console.log(editingState);
  };

  const deleteEditingStateObject = (componentToDelete, component) =>{
    switch (componentToDelete) {
      case "LAYER":
        console.log("Deleting layer: ", component);
        let newFrame = editingState.frame;
        newFrame.layers.splice(component.index, 1);
        newFrame.layers.forEach((layer) => (layer.index = newFrame.layers.indexOf(layer)));
        setEditingState({ ...editingState, frame: newFrame });
        break;
    }

    //TODO: IMPLEMENT
  }

  const setEditingStateHelper = (asudOperation, args) => {
    const [editingStateObjectType, editingStateObject] = args;
    switch (asudOperation){
      case 'ADD':
        addToEditingStateObject(editingStateObjectType, editingStateObject);
        break;
      case 'SWITCH':
        switchEditingStateObject(editingStateObjectType, editingStateObject);
        break;
      case 'UPDATE':
        updateEditingStateObject(editingStateObjectType, editingStateObject);
        break;
      case 'DELETE':
        deleteEditingStateObject(editingStateObjectType, editingStateObject);
        break;
      default:
        console.error("Error")
    }
  };
    // if (componentSwitch) {
    //   switch (componentToUpdate) {
    //     case "FRAME":
    //       console.log("Switching Frames");
    //       console.log(editingState.frame);
    //       console.log(updatedComponent);
    //       setEditingState({ ...editingState, frame: updatedComponent });
    //       //setEditingState({...editingState, layer: updatedComponent.layers[0]})
    //       console.log(editingState.frame);
    //       break;
    //     case "STATE":
    //       break;
    //   }
    //   return;
    // }
  let editingStateAccess = {
    editingState: editingState,
    setEditingState: setEditingStateHelper,
  };

  // if (!props.auth) {
  //   return <Redirect to="/login" />;
  // }

function addAction(taskText) {
    return {
      type: ADD,
      payload: {
        task: {
          name: taskText,
          done: false
        }
      }
    };
  }
  

  return (
    <div className="center">
      <Optionbar
        animationspriteName={animationspriteName}
        setAnimationspriteName={setAnimationspriteName}
      />
      <div className="editscreen center">
        <Toolbar editingStateAccess={editingStateAccess} />
        <Animatorbar
          {...props}
          sprite={animationsprite}
          editingStateAccess={editingStateAccess}
        />
        <Filebar {...props} editingStateAccess={editingStateAccess} />
      </div>
    </div>
  );
}

export default compose(
  graphql(GET_ANIMATIONSPRITE_BY_ID, { name: "GetDBAnimatationspriteByID" })
)(Editscreen);

//5f9108f9119cad1334c6624d
