import React, { useState, useContext } from "react";
import LayerCard from "./LayerCard";
import {EditingStateContext} from "../Editscreen"
import add_icon from "../../../illustration/icons/ap/add_n.png";
import delete_icon from "../../../illustration/icons/ap/delete_n.png";

const LayerPanel = (props) => {
  // const setEditingState = props.editingStateAccess.setEditingState;
  // const editingState = props.editingStateAccess.editingState;
  // let layers = props.editingStateAccess.editingState.frame.layers; 
  
  const editingStateContext = useContext(EditingStateContext);
  const editingState = editingStateContext.editingState;
  let selectedLayer = editingState.layer;
  let layers = editingState.frame.layers; 


  const addLayer = () => {
    console.log("s")
    let newFrame = {...editingState.frame};
    const newLayer = {
      layer_name: "layer",
      index: newFrame.layers.length,
      isVisable: true,
      isLocked: false,
    };
    newFrame.layers.push(newLayer)
    let dispatchObj = {type: 'ADD', payload: ['FRAME', newFrame]};
    editingStateContext.editingStateDispatch(dispatchObj);
  };
  const deleteLayer = () => {
    if (selectedLayer != null && layers.length != 1) {
      let newFrame = {...editingState.frame};
      console.log(selectedLayer);
      newFrame.layers.splice(selectedLayer.index,1);
      console.log(newFrame);
      newFrame.layers.forEach((layer) => (layer.index = newFrame.layers.indexOf(layer)));
      let dispatchObj = {type: 'DELETE', payload: ["FRAME", newFrame]};
      editingStateContext.editingStateDispatch(dispatchObj);
    }
  };

  return (
    <div className="layer-panel">
      <h4>Layers</h4>
      <div id="layer-menu">
        {layers.map((layer) => (
          <span>
            <LayerCard
              layer = {layer}
              selectedLayer = {editingState.layer}
            />
          </span>
        ))}
      </div>
      <span id="layer-controls">
      <img src={add_icon} alt="icon" onClick={addLayer}/>
      <img src={delete_icon} alt="icon" onClick={deleteLayer}/>
      </span>
    </div>
  );
};

export default LayerPanel;
