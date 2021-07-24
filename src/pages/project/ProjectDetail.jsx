import React, { Component } from 'react';
import ProjectDetailData from '../../data/ProjectDetailData';
import ProjectDetailContent from '../../components/contents/ProjectDetailContent';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ProjectDetailData[this.props.match.params.name],
    }
  }

  render() {
    return (
      <ProjectDetailContent data={this.state.data} />
    );
  }
}

export default ProjectDetail;