import React, { Component } from 'react';
import ProjectDetail from '../../../components/contents/projectDetail';
import ProjectDetailData from '../../../data/projectDetail';

class hanWha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProjectDetailData['hanWha'],
        }
    }

    render() {
        return (
            <ProjectDetail data={this.state.data} />
        );
    }
}

export default hanWha;