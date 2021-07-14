import React, { Component } from 'react';
import ProjectDetail from '../../components/contents/ProjectDetail';
import ProjectDetailData from '../../data/ProjectDetailData';

class OnlineShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProjectDetailData['OnlineShop'],
        }
    }

    render() {
        return (
            <ProjectDetail data={this.state.data} />
        );
    }
}

export default OnlineShop;