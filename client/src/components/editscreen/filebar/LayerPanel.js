import React, { useState } from "react";
import LayerCard from "./LayerCard";

const LayerPanel = () => {
  const [layersList, setLayersList] = useState([
    {
      layer_name: "backround",
      index: 0,
      isVisable: true,
      isLocked: false,
    },
    {
      layer_name: "edits",
      index: 1,
      isVisable: true,
      isLocked: false,
    },
  ]);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [selectedLayerName, setSelectedLayerName] = useState(null);

  const addLayer = () => {
    const newLayerIndex = layersList.length;
    const newLayer = {
      layer_name: "layer",
      index: newLayerIndex,
      isVisable: true,
      isLocked: false,
    };
    setLayersList([...layersList, newLayer]);
  };
  const deleteLayer = () => {
    if (selectedLayer != null && layersList.length != 1) {
      let removedLayer = layersList.splice(selectedLayer.index, 1);
      layersList.forEach((layer) => (layer.index = layersList.indexOf(layer)));
      setLayersList([...layersList]);
      setSelectedLayer(null);
    }
  };

  const setSelectedLayerHelper = (layer) => {
    setSelectedLayer(layer);
    setSelectedLayerName(layer.layer_name);
  };
  const setSelectedLayerNameHelper = (value) => {
    setSelectedLayerName(value);
  };

  return (
    <div className="layer-panel">
      <h4>Layers</h4>
      <div id="layer-menu">
        {layersList.map((layer) => (
          <span>
            <LayerCard
              layer={layer}
              selectedLayer={selectedLayer}
              selectedLayerName={selectedLayerName}
              setSelectedLayerName={(e) =>
                setSelectedLayerNameHelper(e.target.value)
              }
              setSelectedLayer={(e) => setSelectedLayerHelper(layer)}
            />
          </span>
        ))}
      </div>
      <span id="layer-controls">
        <button onClick={addLayer}>Add</button>
        <button onClick={deleteLayer}>Delete</button>
      </span>
    </div>
  );
};

export default LayerPanel;
