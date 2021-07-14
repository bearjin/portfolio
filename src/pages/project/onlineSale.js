import React, { Component } from 'react';
import ProjectDetail from '../../components/contents/ProjectDetail';
import ProjectDetailData from '../../data/ProjectDetailData';

class OnlineSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProjectDetailData['OnlineSale'],
        }
    }

    render() {
        return (
            <ProjectDetail data={this.state.data} />
        );
    }
}

export default OnlineSale;