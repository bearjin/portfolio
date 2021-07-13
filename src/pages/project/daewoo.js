import React, { Component } from 'react';
import ProjectDetail from '../../components/contents/ProjectDetail';
import ProjectDetailData from '../../data/ProjectDetail';

class Daewoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProjectDetailData['Daewoo'],
        }
    }

    render() {
        return (
            <ProjectDetail data={this.state.data} />
        );
    }
}

export default Daewoo;