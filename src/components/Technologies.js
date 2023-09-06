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
          {technologies.map((item,index) => {
            return <img key={index} src={item} alt="technology" />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
