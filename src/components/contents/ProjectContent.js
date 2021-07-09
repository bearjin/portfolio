import React, { Component } from 'react';

class ProjectContent extends Component {
    render() {
        return (
            <section id="projectCont" className="sec project">
                <div className="sec_inner">
                    <h2 className="sec_subj">Project</h2>
                    <ul className="card_type_list">
                        <li className="item">
                            <div className="img">
                                <span className="icon"></span>
                            </div>
                            <p className="subj">carrotGame <span className="role">Javascript</span></p>
                            <p className="date">Javascript Study</p>
                        </li>
                        <li className="item">
                            <div className="img">
                                <span className="icon"></span>
                            </div>
                            <p className="subj">RestaurantList <span className="role">React, KakaoMap API</span></p>
                            <p className="date">React Study</p>
                        </li>
                        <li className="item">
                            <div className="img">
                                <span className="icon"></span>
                            </div>
                            <p className="subj">Bearjin Blog <span className="role">Github-pages, Jekyll</span></p>
                            <p className="date">Personal Blog</p>
                        </li>
                    </ul>
                </div>
            </section >
        );
    }
}

export default ProjectContent;