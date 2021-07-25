import React from 'react';
import ProjectDetailData from '../../data/ProjectDetailData';
import ProjectDetailContent from '../../components/contents/ProjectDetailContent';

const ProjectDetail = ({ match }) => {
  const data = ProjectDetailData[match.params.name];

  return (
    <ProjectDetailContent data={data} />
  );
}

export default ProjectDetail;