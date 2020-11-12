import React, { useState } from "react";

const LayerCard = (props) => {
  let classname = "";
  if (props.selectedLayer != null && props.layer === props.selectedLayer) {
    classname = classname + "selected";
  }

  return (
    <div id="layer-card" class={classname} onClick={x => props.setEditingState(["LAYER", props.layer])}>
      <span
        id="layer-card-name"
      >
        {props.layer.layer_name}
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
