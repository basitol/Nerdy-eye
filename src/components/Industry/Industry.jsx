import React from "react";
import "./Industry.scss";

const Industry = ({ title, text, image, className, darkmode }) => {
  return (
    <div
      className={`${className} ${darkmode ? "dark" : ""} industry mt-2 mb-2`}
    >
      <div className="industry--title">
        <h2 className="text-4xl font-bold mr-10">{title}</h2>
        <p className="font-medium ash txt ">{text}</p>
      </div>
      <div className="industry--image">
        <img src={image} alt="industry" className="industry--img" />
      </div>
    </div>
  );
};

export default Industry;
