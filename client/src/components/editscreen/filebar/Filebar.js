import React from "react";
import LayerPanel from "./LayerPanel";

const Filebar = (props) => {
  //let layers = props.selectedFrameJSON.layers;
  return (
    <div className="filebar">
      <h4> File info </h4>
      <div className="style-setion"></div>
      <div className="file-information-section"></div>
      <LayerPanel/>
    </div>
  );
};

export default Filebar;
