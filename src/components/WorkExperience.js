import React from "react";
import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";
import { work } from "../data";

const WorkExperience = () => {
  const gbBtn = useSelector(gbSelector);
  return (
    <section>
      <div className="work__wrapper">
        <h2>{gbBtn ? "Work experience" : "Досвід роботи"}</h2>
        <div className="work">
          {work.map((item) => {
            return (
              <div className="position" key={item.id}>
                <h3>{item.position}</h3>
                <p>Dutchstar</p>
                <span>{item.date}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
