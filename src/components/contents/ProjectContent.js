import React, { Component } from 'react';

class ProjectContent extends Component {
    render() {
        return (
            <section id="portfolioCont" className="section">
                <div className="sec_inner">
                    <h2 className="sec_subj">Portfolio</h2>
                    <div className="portfolio">
                        <ul className="portfolio_list">
                            <li>
                                <span className="frame" style={{ backgroundImage: "url(/images/sample_01.jpg)" }}>
                                    <a href="https://www.hwenc.co.kr/" className="link" target="_blank" title="새 창 열림" rel="noreferrer">한화건설 바로가기</a>
                                </span>
                                <div className="text">
                                    <h4 className="subj">한화건설 <span className="sort">Renewal</span></h4>
                                    <p className="page">메인페이지 1장, 서브페이지 9장(회사소개- (경영이념, 연혁, 재무정보, 찾아오시는길) 사업분야-(토목사업), 사회공헌, 사이버홍보실, 채용정보-(채용공고 -신입채용,경력직채용,현채직채용,프로젝트전문직채용), 고객센터)</p>
                                    <p className="txt">기존의 사이트를 디자인, 코딩까지 제작하였으며 사용자가 이용하기 편리하도록 업그레이드 하고 새롭게 디자인 하였습니다. 메인페이지를 통해 컨텐츠를 쉽고 빠르게 이용할 수 있도록 배치 하여 리뉴얼 하였습니다.</p>
                                    <a href="https://www.hwenc.co.kr/" className="link" target="_blank" title="새 창 열림" rel="noreferrer">GO TO PAGE</a>
                                </div>
                            </li>
                            <li>
                                <span className="frame" style={{ backgroundImage: "url(/images/sample_02.jpg)" }}>
                                    <a href="http://www.kelim.net/" className="link" target="_blank" title="새 창 열림" rel="noreferrer">계림요업 바로가기</a>
                                </span>
                                <div className="text">
                                    <h4 className="subj">계림요업 <span className="sort">Renewal</span></h4>
                                    <p className="page">메인페이지 1장, 서브페이지 3장(이용안내 - 관람안내, 전시 - 상설전시, 프로그램 - 테마시승)</p>
                                    <p className="txt">기존 사이트의 컨텐츠를 작업하였으며, 시멘틱적이면서 웹 표준에 맞도록 제작한 반응형 웹 사이트입니다.</p>
                                    <a href="http://www.kelim.net/" className="link" target="_blank" title="새 창 열림" rel="noreferrer">GO TO PAGE</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectContent;