import React, { useState } from "react";
import LayerCard from "./LayerCard";

const LayerPanel = (props) => {
  const setEditingState = props.editingStateAccess.setEditingState;
  const editingState = props.editingStateAccess.editingState;
  let layers = props.editingStateAccess.editingState.frame.layers; 
  const [selectedLayer, setSelectedLayer] = useState(editingState.layer)

  const addLayer = () => {
    const newLayerIndex = layers.length;
    const newLayer = {
      layer_name: "layer",
      index: newLayerIndex,
      isVisable: true,
      isLocked: false,
    };
    setEditingState("ADD",["LAYER", newLayer])
  };
  const deleteLayer = () => {
    if (selectedLayer != null && layers.length != 1) {
      console.log(selectedLayer)
      setEditingState("DELETE",["LAYER", selectedLayer])
    }
  };

  // const setSelectedLayerHelper = (layer) => {
  //   setSelectedLayer(layer);
  //   setSelectedLayerName(layer.layer_name);
  // };
  // const setSelectedLayerNameHelper = (value) => {
  //   setSelectedLayerName(value);
  // };

  return (
    <div className="layer-panel">
      <h4>Layers</h4>
      <div id="layer-menu">
        {layers.map((layer) => (
          <span>
            <LayerCard
              layer = {layer}
              selectedLayer = {editingState.layer}
              setEditingState={setEditingState}
            />
          </span>
        ))}
      </div>
      <span id="layer-controls">
        <button onClick={addLayer} >Add</button>
        <button onClick={deleteLayer}>Delete</button>
      </span>
    </div>
  );
};

export default LayerPanel;
