import React from "react";
import { IconContainer } from "../reusables";
import { BsAsterisk } from "react-icons/bs";
import "./customInput.scss";

const CustomInput = ({ htmlFor, inputClass, label, type, darkmode }) => {
  return (
    <div className={`relative ${darkmode ? "dark" : ""} ${inputClass}`}>
      <div className="flex label">
        <label htmlFor={htmlFor}>{label}</label>
        <IconContainer>
          <BsAsterisk />
        </IconContainer>
      </div>
      <input type={type}></input>
    </div>
  );
};

export default CustomInput;
