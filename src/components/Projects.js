import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";
import { Link } from "react-router-dom";

import { projectsGB, projectsUA } from "../data";

const Projects = () => {
  const gbBtn = useSelector(gbSelector);

  const renderEngProjects = () => {
    return (
      <>
        {projectsGB.map((project) => {
          const { id, title, description } = project;
          return (
            <div key={id} className="project-text project-text2">
              <h3>{title}</h3>
              <p className="description">{description.substring(0, 200)}...</p>
              <Link
                className="details"
                to={`/portfolio-react/projects/${title.toLowerCase()}`}>
                More details...
              </Link>
            </div>
          );
        })}
      </>
    );
  };

  const renderUkrProjects = () => {
    return (
      <>
        {projectsUA.map((project) => {
          const { id, title, description } = project;
          return (
            <div key={id} className="project-text project-text2">
              <h3>{title}</h3>
              <p className="description">{description.substring(0, 200)}...</p>
              <Link
                className="details"
                to={`/portfolio-react/projects/${title.toLowerCase()}`}>
                More details...
              </Link>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <section>
      <div className="projects-section__wrapper">
        <h2>{gbBtn ? "Projects" : "Проєкти"}</h2>
        <div className="projects__wrapper" id="proj-wrapper">
          {gbBtn ? renderEngProjects() : renderUkrProjects()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
