import React, { Component } from 'react';
import AboutContent from '../components/contents/AboutContent';
import CareerContent from '../components/contents/CareerContent';
import ProjectContent from '../components/contents/ProjectContent';

class Main extends Component {
    render() {
        return (
            <div>
                <section id="home" className="section">
                    <div className="sec_inner">
                        <p>“열정을 가지고 소통하는 웹 퍼블리셔가 되겠습니다.”</p>
                        <p>Kim Woong Jin</p>
                    </div>
                </section>
                <AboutContent />
                <CareerContent />
                <ProjectContent />
            </div>
        );
    }
}

export default Main;