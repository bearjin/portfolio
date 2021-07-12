import React, { Component } from 'react';
import HomeContent from '../components/contents/HomeContent';
import AboutContent from '../components/contents/AboutContent';
import CareerContent from '../components/contents/CareerContent';
import ProjectContent from '../components/contents/ProjectContent';

class Main extends Component {
    render() {
        return (
            <div>
                <HomeContent />
                <AboutContent />
                <ProjectContent />
                <CareerContent />
            </div>
        );
    }
}

export default Main;