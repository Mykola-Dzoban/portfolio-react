import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { gbSelector } from "../store/selector";

import logo from "../img/logo.svg";
import gb from "../img/gb.svg";
import ua from "../img/ua.svg";
import { useState } from "react";

const Header = () => {
  const gbBtn = useSelector(gbSelector);
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    const action = {
      type: "CHANGE_LANG",
    };
    dispatch(action);
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header id="home">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <img className="logo" src={logo} alt="Logo" />
            <div className="languages">
              <img src={gb} alt="English language" onClick={toggleLanguage} />
              <img src={ua} alt="Ukrainian language" onClick={toggleLanguage} />
            </div>
          </div>
          <div className="header__navigation">
            <ul className={isNavOpen ? "nav-menu active" : "nav-menu"}>
              {gbBtn ? (
                <>
                  <Link className="nav-item nav-link" onClick={closeNav} to="/">
                    Home
                  </Link>
                  <Link
                    className="nav-item nav-link"
                    onClick={closeNav}
                    to="/projects">
                    Projects
                  </Link>
                  <Link
                    className="nav-item nav-link"
                    onClick={closeNav}
                    to="/experience">
                    Work experience
                  </Link>
                  <Link
                    className="nav-item nav-link"
                    onClick={closeNav}
                    to="/technologies">
                    Technologies
                  </Link>
                  <Link
                    className="nav-item nav-link"
                    onClick={closeNav}
                    to="/contacts">
                    Contacts
                  </Link>
                </>
              ) : (
                <>
                  <Link className="nav-item nav-link" onClick={closeNav} to="/">
                    Головна
                  </Link>
                  <Link
                    className="nav-item nav-link"
                    onClick={closeNav}
                    to="/projects">
                    Проєкти
                  </Link>
                  <Link
                    className="nav-item nav-link"
                    onClick={closeNav}
                    to="/experience">
                    Досвід роботи
                  </Link>
                  <Link
                    className="nav-item nav-link"
                    onClick={closeNav}
                    to="/technologies">
                    Технології
                  </Link>
                  <Link
                    className="nav-item nav-link"
                    onClick={closeNav}
                    to="/contacts">
                    Контакти
                  </Link>
                </>
              )}
            </ul>
            <div
              className={isNavOpen ? "hamburger active" : "hamburger"}
              onClick={toggleNav}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
