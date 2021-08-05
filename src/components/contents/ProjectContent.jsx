import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProjectListData from '../../data/ProjectListData';

const ProjectContent = () => {
  const data = ProjectListData;

  const makeProjectList = useCallback(() => {
    const ProjectList = data.map((elm, idx) => {
      return (
        <li key={idx} className="project-list__item">
          <Link to={`/portfolio/project/${elm.link}`}>
            <div className="project-list__img">
              <img src={require(`../../resources/images/project/${elm.img}.png`).default} alt={elm.img} />
            </div>
            <p className="project-list__subj">{elm.subj}</p>
            <p className="project-list__date">{elm.date}</p>
          </Link>
        </li >
      );
    });

    return ProjectList;
  }, [data]);

  return (
    <section id="projectCont" className="sec project">
      <div className="sec__inner">
        <h2 className="sec__subj">Project</h2>
        <ul className="project-list">
          {makeProjectList()}
        </ul>
      </div>
    </section >
  );
}

export default ProjectContent;