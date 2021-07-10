import React, { Component } from 'react';

class ProjectContent extends Component {
    render() {
        return (
            <section id="projectCont" className="sec project">
                <div className="sec_inner">
                    <h2 className="sec_subj">Project</h2>
                    <ul className="project_list">
                        <li className="item">
                            <div className="img">
                                <img src={require('../../resources/images/chevrolet.png').default} alt="img" />
                            </div>
                            <p className="subj">쉐보레 온라인 샵</p>
                            <p className="date">2021.02 ~ 2021.05</p>
                        </li>
                        <li className="item">
                            <div className="img">
                                <img src={require('../../resources/images/hanwha.png').default} alt="img" />
                            </div>
                            <p className="subj">한화건설</p>
                            <p className="date">2020.08 ~ 2020.12</p>
                        </li>
                        <li className="item">
                            <div className="img">
                                <img src={require('../../resources/images/chevrolet.png').default} alt="img" />
                            </div>
                            <p className="subj">쉐보레 온라인 구매 예약</p>
                            <p className="date">2020.05 ~ 2020.08</p>
                        </li>
                        <li className="item">
                            <div className="img">
                                <img src={require('../../resources/images/kelim.png').default} alt="img" />
                            </div>
                            <p className="subj">계림요업</p>
                            <p className="date">2020.03 ~ 2020.06</p>
                        </li>
                        <li className="item">
                            <div className="img">
                                <img src={require('../../resources/images/kyungnam.png').default} alt="img" />
                            </div>
                            <p className="subj">경남 아너스빌 분양(송추)</p>
                            <p className="date">2020.02 ~ 2020.03</p>
                        </li>
                        <li className="item">
                            <div className="img">
                                <img src={require('../../resources/images/jaseng.png').default} alt="img" />
                            </div>
                            <p className="subj">자생의료재단</p>
                            <p className="date">2018.10 ~ 2018.12</p>
                        </li>
                        <li className="item">
                            <div className="img">
                                <img src={require('../../resources/images/daewoo.png').default} alt="img" />
                            </div>
                            <p className="subj">대우건설</p>
                            <p className="date">2018.07 ~ 2018.10</p>
                        </li>
                    </ul>
                </div>
            </section >
        );
    }
}

export default ProjectContent;