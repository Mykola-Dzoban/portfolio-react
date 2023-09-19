import { useSelector } from "react-redux";
import { gbSelector } from "../store/selector";
import { Link } from "react-router-dom";

import useFetchProjects from "../store/fetchData";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  const gbBtn = useSelector(gbSelector);

  const renderProjects = () => {
    return (
      <>
        {!loading && projects.map((project, index) => {
          const {
            title,
            descriptionGb,
            descriptionUa,
          } = project;
          return (
            <div key={index} className="project-text project-text2">
              <h3>{title}</h3>
              <p className="description">
                {gbBtn
                  ? descriptionGb.substring(0, 200)
                  : descriptionUa.substring(0, 200)}
                ...
              </p>
              <Link className="details" to={`/projects/${title.toLowerCase()}`}>
                More details...
              </Link>
            </div>
          );
        })}
      </>
    );
  };

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
    <section>
      <div className="projects-section__wrapper">
        <h2>{gbBtn ? "Projects" : "Проєкти"}</h2>
        <div className="projects__wrapper" id="proj-wrapper">
          {renderProjects()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
