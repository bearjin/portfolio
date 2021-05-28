import React, { Component } from 'react';
import profileImg from '../../resources/images/profile.jpg';

class AboutContent extends Component {
    render() {
        return (
            <section id="aboutCont" className="sec">
                <div className="sec_inner">
                    <h2 className="sec_subj">ABOUT ME</h2>
                    <div className="sec_cont">
                        <div className="introduce">
                            <img src={profileImg} alt="개인사진" className="photo" />
                            <div className="introduce_list">
                                <dl className="list">
                                    <dt className="tit">이름 :</dt>
                                    <dd className="info">김웅진</dd>
                                </dl>
                                <dl className="list">
                                    <dt className="tit">생년월일 :</dt>
                                    <dd className="info">1990.05.30</dd>
                                </dl>
                                <dl className="list">
                                    <dt className="tit">핸드폰 :</dt>
                                    <dd className="info">010-4117-6731</dd>
                                </dl>
                                <dl className="list">
                                    <dt className="tit">이메일 :</dt>
                                    <dd className="info">kwj5030@gmail.com</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="can">
                            <span className="can_tit">I can</span>
                            <ul className="can_list">
                                <li>HTML,CSS를 사용하여 웹표준에 맞는 마크업을 할 수 있는 퍼블리셔</li>
                                <li>Javascript와 jQuery를 사용하여 동적 구현을 할 수 있는 퍼블리셔</li>
                                <li>팀원들과 소통할 줄 아는 퍼블리셔</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContent;