import React, { Component } from 'react';
import HomeContent from '../components/contents/homeContent';
import AboutContent from '../components/contents/aboutContent';
import CareerContent from '../components/contents/careerContent';
import ProjectContent from '../components/contents/projectContent';

class Main extends Component {
    render() {
        return (
            <div>
                <HomeContent />
                <AboutContent />
                <CareerContent />
                <ProjectContent />
            </div>
        );
    }
}

export default Main;