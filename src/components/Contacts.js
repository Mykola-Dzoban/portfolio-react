import React from "react";
import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";
import { contacts } from "../data";

const Contacts = () => {
  const gbBtn = useSelector(gbSelector);
  return (
    <section className="contacts">
      <div className="contacts__wrapper">
        <h2>{gbBtn ? "Contacts" : "Контакти"}</h2>
        <div className="contacts_socials">
          {contacts.map((item) => {
            return (
              <a
                key={item.id}
                target="_blank"
                rel="noreferrer"
                href={item.link}>
                <img src={item.icon} alt="contact" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
