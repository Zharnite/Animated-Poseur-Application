import React from "react";
import LayerPanel from "./LayerPanel";

const Filebar = (props) => {
  return (
    <div className="filebar">
      <h4> File info </h4>
      <div className="style-setion"></div>
      <div className="file-information-section"></div>
      <LayerPanel {...props}/>
    </div>
  );
};

export default Filebar;
