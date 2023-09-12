import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";

const url = "https://api.github.com/users/Mykola-Dzoban";

const About = () => {
  const gbBtn = useSelector(gbSelector);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const user = await resp.json();
        // console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  if (isLoading) {
    return (
      <section className="contacts">
        <div className="contacts__wrapper">
          <h2>Loading...</h2>
        </div>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="contacts">
        <div className="contacts__wrapper">
          <h2>There was an error...</h2>
        </div>
      </section>
    );
  }

  const newDate = new Date(user.created_at);

  return (
    <section className="about">
      <div className="about__wrapper">
        <h2>{gbBtn ? "About" : "Про мене"}</h2>
        <p>
          {gbBtn ? (
            <>
              I am a front-end developer based in Ukraine. Every day I try to
              improve my knowledge in this field. I strive to improve my
              projects by making the code cleaner and clearer.
              <br />
              <br />I know HTML, CSS, and JavaScript and have hands-on
              experience with popular library like React. Using these
              technologies, I enjoy transforming designs into responsive and
              intuitive web interfaces that captivate users.
            </>
          ) : (
            <>
              Я front-end розробник, знаходжусь в Україні. Щодня я намагаюся
              вдосконалювати свої знання в цій галузі. Я прагну покращити свої
              проекти, роблячи код чистішим та зрозумілішим.
              <br />
              <br />Я знаю HTML, CSS та JavaScript і маю практичний досвід
              роботи з такою популярною бібліотекою, як React. Використовуючи ці
              технології, мені подобається перетворювати дизайн на інтуїтивно
              зрозумілі веб-інтерфейси, які зачаровують користувачів.
            </>
          )}
        </p>
        <div className="about__github-user">
          <h3>Github user</h3>
          <hr />
          <img src={user.avatar_url} alt="Avatar" />
          <div className="user-data">
            <p className="github-name">
              <strong>{user.name}</strong>
            </p>
            <hr />
            <p className="github-location">
              <strong>Location:</strong> {user.location}
            </p>
            <p className="github-date">
              <strong>Created:</strong> {newDate.toDateString()}
            </p>
            <p className="github-update">
              <strong>Public repositories:</strong> {user.public_repos}
            </p>
            <hr />
            <a target="_blank" rel="noreferrer" href={user.html_url}>
              {gbBtn ? "GitHub profile" : "GitHub профіль"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
