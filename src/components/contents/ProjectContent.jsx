import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import ProjectListData from '../../data/ProjectListData';

const ProjectContent = () => {
  const data = ProjectListData;

  const makeProjectList = useCallback(() => {
    const ProjectList = data.map((elm, idx) => {
      return (
        <li key={idx} className="item">
          <Link to={`/portfolio/project/${elm.link}`}>
            <div className="img">
              <img src={require(`../../resources/images/project/${elm.img}.png`).default} alt="img" />
            </div>
            <p className="subj">{elm.subj}</p>
            <p className="date">{elm.date}</p>
          </Link>
        </li >
      );
    });

    return ProjectList;
  }, [data]);

  return (
    <section id="projectCont" className="sec project">
      <div className="sec_inner">
        <h2 className="sec_subj">Project</h2>
        <ul className="project_list">
          {makeProjectList()}
        </ul>
      </div>
    </section >
  );
}

export default ProjectContent;