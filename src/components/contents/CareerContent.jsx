import React from 'react';
import uberImg from '../../resources/images/career/uber.png';

const CareerContent = () => {
  return (
    <section id="careerCont" className="sec career">
      <div className="sec__inner">
        <h2 className="sec__subj">Career</h2>
        <div className="career-detail">
          <div className="career-intro">
            <div className="career-profile">
              <div className="career-profile__img">
                <img src={uberImg} alt="더위버크리에이티브 로고" />
              </div>
              <div className="career-profile__info">
                <p className="career-profile__tit">더위버크리에이티브</p>
                <p className="career-profile__year">2017.10 ~ 2021.06 (3년 8개월)</p>
                <p className="career-profile__role">UI개발팀 / Publishing(신규개발 & 유지보수)</p>
              </div>
            </div>
            <p className="career-intro__txt">
              웹에이전시로 e-Business의 구축부터 운영까지 통합디지털마케팅서비스를 제공하고 있습니다.
            </p>
            <p className="career-intro__txt">
              기본적으로는 사이트 구축 및 유지운영 업무를 담당했으며 PL로써 프로젝트 관리 업무 또한 담당했습니다.
            </p>
          </div>
          <ol className="career-project">
            <li className="career-project__area">
              <p className="career-project__name">사이트 구축</p>
              <ul className="career-project__list">
                <li className="career-project__item">한화건설</li>
                <li className="career-project__item">계림요업</li>
                <li className="career-project__item">송추 아너스빌</li>
                <li className="career-project__item">자생의료재단</li>
                <li className="career-project__item">대우건설</li>
              </ul>
            </li>
            <li className="career-project__area">
              <p className="career-project__name">유지운영</p>
              <ul className="career-project__list">
                <li className="career-project__item">쉐보레</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section >
  );
}

export default CareerContent;