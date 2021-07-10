import React, { Component } from 'react';

class ProjectDetail extends Component {
    render() {
        return (
            <section className="detail">
                <h2 className="detail_tit">더위버크리에이티브</h2>
                <ol className="career_project_list">
                    <li className="item">
                        <p className="name">쉐보레 온라인 샵</p>
                        <ul className="list">
                            <li className="sub_item">
                                사용기술 : <span>Spring, Jsp, Javascript, jQuery, css, Bootstrap</span>
                            </li>
                            <li className="sub_item">
                                링크 : <a href="https://www.chevrolet.co.kr/purchase/online.gm" target="_blank" rel="noreferrer">https://www.chevrolet.co.kr/purchase/online.gm</a>
                            </li>
                            <li className="sub_item">
                                담당업무 :
                                <ul className="role_list">
                                    <li>퍼블리싱 (100%)</li>
                                    <li>사용자 페이지(Jsp, Javascript, jQuery, Bootstrap) 개발 (80%)</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>
        )
    }
}

export default ProjectDetail;