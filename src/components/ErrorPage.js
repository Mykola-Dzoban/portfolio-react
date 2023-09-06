import React from 'react'
import brokenLink from '../img/broken.svg'
import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";

const ErrorPage = () => {
  const gbBtn = useSelector(gbSelector);
  return (
    <div className="error__wrapper">
      <h2>{gbBtn ? "Oops, there was an error" : "Упс, виникла помилка"}</h2>
      <img src={brokenLink} alt="Broken link" />
    </div>
  );
}

export default ErrorPage