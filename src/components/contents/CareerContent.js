import React, { Component } from 'react';

class CareerContent extends Component {
    render() {
        return (
            <section id="careerCont" className="sec">
                <div className="sec_inner">
                    <h2 className="sec_subj">CAREER</h2>
                    <div className="sec_cont">
                        <div className="career">
                            <p className="sec_cont_tit">Education &amp; Job</p>
                            <ul className="career_list">
                                <li>
                                    <span className="date">From 2016.09 to 2017.03</span>
                                    <span className="subj">스마트웹&amp;컨텐츠개발 과정 수료</span>
                                </li>
                                <li>
                                    <span className="date">From 2017.05 to 2017.08</span>
                                    <span className="subj">자바스크립트 기초 스터디</span>
                                </li>
                                <li>
                                    <span className="date">From 2017.10 to 2021.05</span>
                                    <span className="subj">더위버크리에이티브 재직</span>
                                </li>
                            </ul>
                        </div>
                        <div className="skill">
                            <p className="sec_cont_tit">Skill</p>
                            <ul className="skill_list">
                                <li className="sk_1">
                                    <span className="bar">
                                        PHOTOSHOP
                                        <span className="percent">70%</span>
                                    </span>
                                </li>
                                <li className="sk_2">
                                    <span className="bar">
                                        HTML
                                        <span className="percent">95%</span>
                                    </span>
                                </li>
                                <li className="sk_3">
                                    <span className="bar">
                                        CSS
                                        <span className="percent">95%</span>
                                    </span>
                                </li>
                                <li className="sk_4">
                                    <span className="bar">
                                        jQuery
                                        <span className="percent">75%</span>
                                    </span>
                                </li>
                                <li className="sk_5">
                                    <span className="bar">
                                        Javascript
                                        <span className="percent">60%</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CareerContent;