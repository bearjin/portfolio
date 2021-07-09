import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section id="aboutCont" className="sec about">
                <div className="sec_inner">
                    <h2 className="sec_subj">ABOUT</h2>
                    <div className="about_intro">
                        <p className="name">Bearjin</p>
                        <p className="txt">
                            HTML,CSS를 사용하여 웹표준에 맞는 마크업을 할 수 있는 퍼블리셔
                            Javascript와 jQuery를 사용하여 동적 구현을 할 수 있는 퍼블리셔
                            팀원들과 소통할 줄 아는 퍼블리셔
                        </p>
                        <p className="txt">
                            HTML,CSS를 사용하여 웹표준에 맞는 마크업을 할 수 있는 퍼블리셔
                            Javascript와 jQuery를 사용하여 동적 구현을 할 수 있는 퍼블리셔
                            팀원들과 소통할 줄 아는 퍼블리셔
                        </p>
                        <a className="email" href="mailto:kwj5030@gmail.com" target="_blank" rel="noreferrer">kwj5030@gmail.com</a>
                        <ul className="links">
                            <a className="link" href="https://github.com/bearjin" target="_blank" rel="noreferrer">Github</a>
                            <a className="link" href="https://bearjin.github.io" target="_blank" rel="noreferrer">Blog</a>
                        </ul>
                    </div>
                    <div className="about_skill">
                        <div className="skills">
                            <h3 className="subj">Programming Skill</h3>
                            <ul className="skill_list">
                                <li className="item">
                                    <p className="name">Javascript</p>
                                    <div className="info">
                                        <div className="img"></div>
                                        <div className="rank">
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="skills">
                            <h3 className="subj">Tools</h3>
                            <ul className="skill_list">
                                <li className="item">
                                    <p className="name">Javascript</p>
                                    <div className="info">
                                        <div className="img"></div>
                                        <div className="rank">
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                            <span className="rank_meter"></span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContent;