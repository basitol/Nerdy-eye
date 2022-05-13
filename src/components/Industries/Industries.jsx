import React from "react";
import { Industry } from "../index";
import { industryData } from "../../assets/data";
import "./Industries.scss";

const Industries = ({ darkmode }) => {
  return (
    <section className={`industries ${darkmode ? "dark" : ""} pt-8 pb-14`}>
      <div className="industries--title mx-5">
        <h2 className="md:hidden mb-7">
          INDUSTRIES WE <span>HIRE</span> FOR
        </h2>
        <h2 className="text-4xl font-bold mr-10 hidden md:block">
          browse by <span>industries</span>{" "}
        </h2>
        <p className="font-medium mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet
          in lacus, duis sagittis. Eget elementum duis
        </p>
      </div>

      <div className="flex flex-col items-center industries--list">
        {industryData.map((industry) => {
          const { id } = industry;
          return (
            <Industry
              key={id}
              {...industry}
              className={`div${id}`}
              darkmode={darkmode}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Industries;
