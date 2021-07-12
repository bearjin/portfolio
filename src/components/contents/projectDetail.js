import React, { Component } from 'react';

class ProjectDetail extends Component {
    render() {
        return (
            <section className="project_detail">
                <h2 className="project_detail_tit">쉐보레 온라인 샵</h2>
                <div className="project_detail_img"></div>
                <p className="project_detail_txt"></p>
                <div className="project_detail_list">
                    <ul className="list">
                        <li className="item">
                            사용기술 : <span>Spring, Jsp, Javascript, jQuery, css, Bootstrap</span>
                        </li>
                        <li className="item">
                            링크 : <a href="https://www.chevrolet.co.kr/purchase/online.gm" target="_blank" rel="noreferrer">https://www.chevrolet.co.kr/purchase/online.gm</a>
                        </li>
                        <li className="item">
                            담당업무 :
                            <ul className="role_list">
                                <li>퍼블리싱 (100%)</li>
                                <li>사용자 페이지(Jsp, Javascript, jQuery, Bootstrap) 개발 (80%)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default ProjectDetail;