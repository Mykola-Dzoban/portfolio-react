import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";
import github from "../img/github.svg";
import website from "../img/website.svg";

import { useEffect, useState } from "react";
import useFetchProjects from "../store/fetchData";


const Project = () => {
  const { loading, projects } = useFetchProjects();
  const gbBtn = useSelector(gbSelector);
  const projectName = useParams().projectTitle;
  const project = !loading && projects.find(
    (project) => project.title.toLowerCase() === projectName
  );
  const {
    title,
    stack,
    descriptionGb,
    descriptionUa,
    githubLink,
    pageLink,
    photos
  } = project;

  const [curSlide, setCurSlide] = useState(0);

  const prevSlide = () => {
    setCurSlide((oldSlide) => {
      const result = (oldSlide - 1 + 3) % 3;
      return result;
    });
  };
  const nextSlide = () => {
    setCurSlide((oldSlide) => {
      const result = (oldSlide + 1) % 3;
      return result;
    });
  };

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [curSlide]);

  if (loading) {
    return (
      <section className="contacts">
        <div className="contacts__wrapper">
          <div className="loading"></div>
        </div>
      </section>
    );
  }

  return (
    <div className="project">
      <div className="project-text">
        <h2>{title}</h2>
        <p className="tech-stack">{stack}</p>
        <p className="description">{gbBtn ? descriptionGb : descriptionUa}</p>
      </div>
      <div className="project-links">
        <a target="_blank" rel="noreferrer" href={githubLink}>
          <img src={github} alt={title} />
        </a>
        <a target="_blank" rel="noreferrer" href={pageLink}>
          <img src={website} alt={title} />
        </a>
      </div>
      <div className="slider-container">
        {!loading &&
          photos.map((photoImg, index) => {
            
            return (
              <article
                className="slide"
                style={{
                  transform: `translateX(${100 * (index - curSlide)}%)`,
                  opacity: index === curSlide ? 1 : 0,
                  visibility: index === curSlide ? "visible" : "hidden",
                }}
                key={index}>
                <img src={photoImg} alt={title} className="slide-img" />
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default Project;
