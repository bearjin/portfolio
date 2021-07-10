import React, { Component } from 'react';

class CareerDetail extends Component {
    render() {
        return (
            <section className="career_detail">
                <div className="career_detail_intro">
                    <div className="career_detail_profile">
                        <div className="career_detail_img"></div>
                        <h2 className="career_detail_tit">더위버크리에이티브</h2>
                        <h2 className="career_detail_year">2017.10 ~ 2021.06</h2>
                        <h2 className="career_detail_role">Publishing(신규개발 & 유지보수)</h2>
                    </div>
                    <p className="career_detail_txt">
                        여러가지 상품(레저,커피,상품권 등) 중 하나를 선택하여 이용할 수 있는 시스템
                    </p>
                </div>
                <div className="career_detail_info">
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
                </div>
            </section>
        )
    }
}

export default CareerDetail;