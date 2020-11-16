import React, { useState, useContext} from "react";
import {EditingStateContext} from "../Editscreen"
import eye_icon from "../../../illustration/icons/ap/eye_n.png";


const LayerCard = (props) => {
  const editingStateContext = useContext(EditingStateContext);
  const editingStateDispatch = editingStateContext.editingStateDispatch;
  let classname = "";
  if (props.selectedLayer != null && props.layer === props.selectedLayer) {
    classname = classname + "selected";
  }

  return (
    
    <div id="layer-card" class={classname} onClick={() => editingStateDispatch({type: 'SWITCH', payload: ['LAYER', props.layer]})}>
      <span
        id="layer-card-name"
      >
        {props.layer.layer_name}
      </span>
      <img
        alt="icon"
        src={eye_icon}
        className="layer-card-icon"
      />
    </div>
  );
};

export default LayerCard;
