import React from "react";
import "./Toggle.scss";

const Toggle = ({ darkmode, toggledarkmode }) => {
  console.log(darkmode);
  return (
    <div className={`toggle ${darkmode ? "dark" : ""} md:mt-auto`}>
      <div className="toggler">
        <div className="toggler--slider" onClick={toggledarkmode}>
          <div className="toggler--slider--circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
