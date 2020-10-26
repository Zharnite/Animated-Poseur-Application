import React, { useState } from "react";

const LayerCard = (props) => {
  const layer = props.layer;
  const selectedLayer = props.selectedLayer;
  const setSelectedLayer= props.setSelectedLayer;
  // const setSelectedLayerName = props.setSelectedLayerName;
  // const setSelectedLayer = props.setSelectedLayer;
  //const [diplayLayerNamefield, setLayerNamefield] = useState(false);

  // const showLayerNamefieldHelper = (e, index) => {
  //   if (selectedLayer != null && index == selectedLayer.index) {
  //     setLayerNamefield(true);
  //   }
  // };
  // const hideLayerNamefieldHelper = (key) => {
  //   console.log(key);
  //   if (key == "Enter") {
  //     setLayerNamefield(false);
  //   }
  // };

  let classname = "";
  if (selectedLayer != null && layer.index == selectedLayer.index) {
    classname = classname + "selected";
  }

  return (
    <div id="layer-card" class={classname} onClick={setSelectedLayer}>
      <span
        id="layer-card-name"
        // onDoubleClick={(e) => showLayerNamefieldHelper(e, layer.index)}
      >
        {layer.layer_name}
      </span>
      <img
        alt="L"
        src={require("../../../illustration/icons/erase-50.png")}
        className="layer-card-icon"
      />
      <img
        alt="L"
        src={require("../../../illustration/icons/edit-50.png")}
        className="layer-card-icon"
      />
    </div>
  );
};

export default LayerCard;
