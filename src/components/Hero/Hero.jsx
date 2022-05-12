import React from "react";
import { Toggle } from "../index";
import { CustomButton } from "../reusables";
import { profile, profileLg } from "../../assets";
import "./Hero.scss";

const Hero = ({ darkmode, toggledarkmode }) => {
  return (
    <section className={`hero md:flex ${darkmode ? "dark" : ""}`}>
      <div className="hero--title w-full text-center md:w-6/12 md:mt-32 md:text-left md:ml-12 lg:ml-24	">
        <div className="header">GET MATCHED & LET YOUR JOB FIND YOU</div>
        <div className="sub-header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          lectus placerat id in vehicula felis condimentum.
        </div>
        <CustomButton className={"mt-8 md:mt-14"}>For Talents</CustomButton>
        <div className="flex justify-around mt-6 md:justify-start md:mt-20">
          <div className="flex flex-col md:mr-24">
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
      <div className="hero--sub flex items-center justify-center pt-9 pb-12 w-full md:w-6/12w-full md:w-6/12 md:mr-12 lg:mr-24">
        <div className="profile">
          <picture>
            <source media="(min-width: 1024px)" srcset={profileLg} />
            <img src={profile} alt="IfItDoesntMatchAnyMedia" />
          </picture>
        </div>
      </div>
      <Toggle toggledarkmode={toggledarkmode} darkmode={darkmode} />
    </section>
  );
};

export default Hero;
