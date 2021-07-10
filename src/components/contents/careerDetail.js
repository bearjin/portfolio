import React, { Component } from 'react';

class CareerDetail extends Component {
    render() {
        return (
            <section className="career_detail">
                <div className="career_detail_intro">
                    <div className="career_detail_profile">
                        <div className="profile_img"></div>
                        <div className="profile_info">
                            <p className="tit">더위버크리에이티브</p>
                            <p className="year">2017.10 ~ 2021.06 (3년 8개월)</p>
                            <p className="role">UI개발팀 / Publishing(신규개발 & 유지보수)</p>
                        </div>
                    </div>
                    <p className="career_detail_txt">
                        웹에이전시로 주로 기업 사이트 구축 및 유지운영
                    </p>
                </div>
                <ol className="career_project_list">
                    <li className="item">
                        <p className="name">사이트 구축</p>
                        <ul className="list">
                            <li className="sub_item">한화건설</li>
                            <li className="sub_item">계림요업</li>
                            <li className="sub_item">송추 아너스빌</li>
                            <li className="sub_item">자생의료재단</li>
                            <li className="sub_item">대우건설</li>
                        </ul>
                    </li>
                    <li className="item">
                        <p className="name">유지운영</p>
                        <ul className="list">
                            <li className="sub_item">쉐보레</li>
                        </ul>
                    </li>
                </ol>
            </section>
        )
    }
}

export default CareerDetail;