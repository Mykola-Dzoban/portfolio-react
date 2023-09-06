import React from 'react'
import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";

const Footer = () => {
  const gbBtn = useSelector(gbSelector);
  const dateYear = new Date();
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          {gbBtn ? (
            <p>© Copyright {dateYear.getFullYear()}. All right reserved</p>
          ) : (
            <p>© Copyright {dateYear.getFullYear()}. Всі права захищені</p>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer