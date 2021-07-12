import React, { Component } from 'react';
import ProjectDetail from '../../../components/contents/ProjectDetail';
import ProjectDetailData from '../../../data/projectDetail';

class KyungNam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProjectDetailData['kyungNam'],
        }
    }

    render() {
        return (
            <ProjectDetail data={this.state.data} />
        );
    }
}

export default KyungNam;