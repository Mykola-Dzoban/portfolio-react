import React from "react";
import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";
import { technologies } from "../data";

const Technologies = () => {
  const gbBtn = useSelector(gbSelector);
  return (
    <section className="tech">
      <div className="tech__wrapper">
        <h2>{gbBtn ? "Technologies" : "Технології"}</h2>
        <div className="technologies">
          {technologies.map((item, index) => {
            const { techUrl, techName } = item;
            return (
              <div key={index} className="tech-wrap">
                <img src={techUrl} alt="technology" />
                <div className="tech-item-name">{techName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
