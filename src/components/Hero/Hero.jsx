import React from "react";
import { useState } from "react";
import { CustomButton } from "../reusables";
import "./Hero.scss";

const Hero = ({ darkmode }) => {
  return (
    <section className={`hero ${darkmode ? "dark" : ""}`}>
      <div>
        <div className="header">GET MATCHED & LET YOUR JOB FIND YOU</div>
        <div className="sub-header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          lectus placerat id in vehicula felis condimentum.
        </div>
        <CustomButton>For Talents</CustomButton>
        <div className="flex justify-around mt-6">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">
              120
              <span className="l-red">+</span>
            </h2>
            <p className="font-medium ash">Recruiters</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">
              200
              <span className="l-red">+</span>
            </h2>
            <p className="font-medium ash">Talents</p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
