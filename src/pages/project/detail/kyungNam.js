import React, { Component } from 'react';
import ProjectDetail from '../../../components/contents/ProjectDetail';
import ProjectDetailData from '../../../data/ProjectDetail';

class Kyungnam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProjectDetailData['Kyungnam'],
        }
    }

    render() {
        return (
            <ProjectDetail data={this.state.data} />
        );
    }
}

export default Kyungnam;