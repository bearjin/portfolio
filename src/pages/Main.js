import React, { Component } from 'react';
import AboutContent from '../components/structure/about/aboutContent';
import CareerContent from '../components/structure/career/careerContent';
import ProjectContent from '../components/structure/project/projectContent';

class Main extends Component {
    render() {
        return (
            <div>
                <AboutContent />
                <CareerContent />
                <ProjectContent />
            </div>
        );
    }
}

export default Main;