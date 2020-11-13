import React, { useState, useEffect } from "react";
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

  /*
   * @author: Carlos Lopez
   * @var: x (array)
   * @description: Updates the animation sprite & sets selected components which the user may want to work with.
   * An update corresponds to a respective states: {"SPRITE", "STATE", "FRAME", LAYER", "TOOL"}.
   * The state determine which component of the data-structure to update.
   * Refer to the Animation Sprite JSON data for cleafication on data-structure.
   * Example: if you want you update the animation sprites name, you would pass in ["SPRITE", update]
   * Example: if you want add a frame to the current state you would pass in ["STATE", update]
   * Example: if you want delete a layer from the current frame you would pass in ["FRAME", update]
   * Example: if you want select a layer from the current frame you would pass in ["LAYER", update]
   *
   */
  const setEditingStateHelper = (x, crudType) => {
    const [componentToUpdate, updatedComponent] = x;
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

    switch (componentToUpdate) {
      case "SPRITE":
        console.log("Updating Current Sprite Components");
        let updatedSprite = updatedComponent;
        setAnimationsprite({
          ...animationsprite,
          animation_states: updatedSprite,
        });
        console.log(animationsprite);
        break;
      case "STATE":
        console.log("Updating Current State Components", updatedComponent);
        let updatedState = editingState.state;
        updatedState.frames = updatedComponent;
        setEditingState({ ...editingState, state: updatedState });
        let newAnimationsprite = animationsprite;
        //newAnimationsprite.animation_states[editingState.stateindex] =
        //setAnimationsprite({...animationsprite, f: updatedState})
        break;
      case "FRAME":
        console.log("Updating Current Frame Components", updatedComponent);
        let updatedFrame = updatedComponent;
        setEditingState({ ...editingState, frame: updatedFrame });
        break;
      case "LAYER":
        console.log("Setting New Layer");
        let selectedLayer = updatedComponent;
        setEditingState({ ...editingState, layer: selectedLayer });
        break;
      case "TOOL":
        console.log("Setting New Tool");
        let selectedTool = updatedComponent;
        setEditingState({ ...editingState, tool: selectedTool });
        break;
      case "COLOR":
        console.log("Changing Color");
        let color = updatedComponent;
        setEditingState({ ...editingState, color: color });
        break;
    }
    console.log(editingState);
  };
  let editingStateAccess = {
    editingState: editingState,
    setEditingState: setEditingStateHelper,
  };

  // if (!props.auth) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div className="center" onKeyPress={(e) => e.stopPropagation()}>
      <Optionbar
        animationspriteName={animationspriteName}
        setAnimationspriteName={setAnimationspriteName}
      ></Optionbar>
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
