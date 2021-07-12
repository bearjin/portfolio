import React, { Component } from 'react';
import ProjectDetail from '../../../components/contents/projectDetail';
import ProjectDetailData from '../../../data/projectDetail';

class onlineShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ProjectDetailData['onlineShop'],
        }
    }

    render() {
        return (
            <ProjectDetail data={this.state.data} />
        );
    }
}

export default onlineShop;