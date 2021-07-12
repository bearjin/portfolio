import React, { Component } from 'react';
import ProjectDetail from '../../../components/contents/ProjectDetail';
import ProjectDetailData from '../../../data/projectDetail';

class onlineSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProjectDetailData['onlineSale'],
        }
    }

    render() {
        return (
            <ProjectDetail data={this.state.data} />
        );
    }
}

export default onlineSale;