import React from "react";
import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";

import mainPhoto from "../img/av200b.png";

import { mainGB, mainUA } from "../data";

const Main = () => {
  const gbBtn = useSelector(gbSelector);

  const renderEng = () => {
    return (
      <>
        {mainGB.map((item, index) => {
          return (
            <div key={index} className="main-text">
              <h1>{item.h1}</h1>
              <p>
                {item.p1} <span className="text-name">{item.name}</span>.<br />
                {item.p2}
                <span className="text-profession">{item.position}</span>.
              </p>
            </div>
          );
        })}
      </>
    );
  };
  const renderUkr = () => {
    return (
      <>
        {mainUA.map((item,index) => {
          return (
            <div key={index} className="main-text">
              <h1>{item.h1}</h1>
              <p>
                {item.p1} <span className="text-name">{item.name}</span>.<br />
                {item.p2}
                <span className="text-profession">{item.position}</span>.
              </p>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <section className="main">
      <div className="main__wrapper">
        {gbBtn ? renderEng() : renderUkr()}
        <div className="main-image">
          <img src={mainPhoto} alt="Avatar" />
        </div>
      </div>
    </section>
  );
};

export default Main;
