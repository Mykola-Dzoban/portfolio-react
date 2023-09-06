import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";

import { projectsGB, projectsUA } from "../data";
import { useEffect, useState } from "react";

const Project = () => {
  const gbBtn = useSelector(gbSelector);
  const projectName = useParams().projectTitle;
  const projects = gbBtn ? projectsGB : projectsUA;
  const project = projects.find(
    (project) => project.title.toLowerCase() === projectName
  );
  const {
    title,
    stack,
    description,
    githubLink,
    pageLink,
    github,
    website,
    photos
  } = project;

  const [curSlide, setCurSlide] = useState(0);

  const prevSlide = () => {
    setCurSlide((oldSlide) => {
      const result = (oldSlide - 1 + photos.length) % photos.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurSlide((oldSlide) => {
      const result = (oldSlide + 1) % photos.length;
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

  return (
    <div className="project">
      <div className="project-text">
        <h2>{title}</h2>
        <p className="tech-stack">{stack}</p>
        <p className="description">{description}</p>
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
        {photos.map((photoImg, index) => {
          const { photo } = photoImg;
          return (
            <article
              className="slide"
              style={{
                transform: `translateX(${100 * (index - curSlide)}%)`,
                opacity: index === curSlide ? 1 : 0,
                visibility: index === curSlide ? "visible" : "hidden",
              }}
              key={index}>
              <img src={photo} alt={title} className="slide-img" />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
