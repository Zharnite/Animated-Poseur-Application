import React, { useState } from "react";
import LayerCard from "./LayerCard";

const LayerPanel = (props) => {
  const setEditingState = props.editingStateAccess.setEditingState;
  const editingState = props.editingStateAccess.editingState;

  let layers = props.editingStateAccess.editingState.frame.layers; 
  const [selectedLayer, setSelectedLayer] = useState(editingState.layer)
  //console.log(layers)

  const newLayer = {
        layer_name: "layer",
        index: layers.length,
        isVisable: true,
        isLocked: false,
      };
  // props.currentFrameState.frame.layers.push(newLayer)
  // console.log(layers)

  const addLayer = () => {
    const newList =  editingState.frame.layers;
    const newLayerIndex = layers.length;
    const newLayer = {
      layer_name: "layer",
      index: newLayerIndex,
      isVisable: true,
      isLocked: false,
    };
    newList.push(newLayer);

    const newFrame = editingState.frame;
    newFrame.layers = newList
    setEditingState(["FRAME", newFrame])
    console.log(newList)

  //   setLayersList([...layersList, newLayer]);
  };
  // const deleteLayer = () => {
  //   if (selectedLayer != null && layersList.length != 1) {
  //     let removedLayer = layersList.splice(selectedLayer.index, 1);
  //     layersList.forEach((layer) => (layer.index = layersList.indexOf(layer)));
  //     setLayersList([...layersList]);
  //     setSelectedLayer(null);
  //   }
  // };

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
        <button >Delete</button>
      </span>
    </div>
  );
};

export default LayerPanel;
