import React, { useState } from "react";
import LayerCard from "./LayerCard";

const LayerPanel = (props) => {
  let layers = props.sfl.frame.layers;
  const [selectedLayer, setSelectedLayer] = useState(props.sfl.layer)
  console.log(layers)

  const newLayer = {
        layer_name: "layer",
        index: 0,
        isVisable: true,
        isLocked: false,
      };
  // props.currentFrameState.frame.layers.push(newLayer)
  // console.log(layers)

  const addLayer = () => {
    const newList =  props.sfl.frame.layers;
    const newLayerIndex = layers.length;
    const newLayer = {
      layer_name: "layer",
      index: newLayerIndex,
      isVisable: true,
      isLocked: false,
    };
    newList.push(newLayer);
    props.setSFL({componentToUpdate : "FRAME", updatedComponent: newList})
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
              selectedLayer={selectedLayer}
              selectedLayerName={setSelectedLayer}
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
