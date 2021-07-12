import React, { Component } from 'react';

class ProjectDetail extends Component {
    render() {
        return (
            <section className="project_detail">
                <h2 className="project_detail_tit">쉐보레 온라인 샵</h2>
                <div className="project_detail_img">
                    <img src={require('../../resources/images/project/detail/online_shop.jpg').default} alt="img"></img>
                </div>
                <div className="project_detail_txt">
                    <p className="txt">
                        고객들이 오프라인 전시장을 방문하지 않고 온라인을 통해 쉐보레 차량을 구매가 가능하도록 제공하는 서비스 입니다.
                        사용자가 구매를 원하는 차량을 선택하고 본인의 상황에 맞게 견적 옵션들이 선택 가능합니다.
                        사용자 선택에 따라 단계별로 옵션들이 동적으로 변하며 모든 옵션을 선택 완료 후 최종 단계에서 사용자가 선택한 옵션들을
                        견적서 형식으로 보여주도록 제작하였습니다.
                    </p>
                    <p className="txt">
                        데이터 통신을 이용해 받아온 데이터들을 화면에 만들어 주는 것은 어렵지 않았으나, 사용자 선택에 따라 옵션들이 동적으로 변하게 하는 부분이 어려웠습니다.
                        옵션에 따라 받아온 가격 데이터에 부가세가 포함되어 있다거나, 단위가 10만원 단위로 되어야하는 등등의 계산 공식이 다르게 정해져
                        계산식을 잘못 적용할 경우 잘못된 가격이 화면에 노출되어 사용자에게 큰 혼란을 주고 실제 온라인에서 결제까지 이루어지기 때문에 수차례 확인 과정을 거치고 주의해서 제작하여 문제없이 오픈하였고
                        많이 배울 수 있었습니다.
                    </p>
                </div>
                <div className="project_detail_list">
                    <ul className="list">
                        <li className="item">
                            사용기술 : <span>HTML, CSS, Javascript, jQuery, Ajax</span>
                        </li>
                        <li className="item">
                            링크 : <a className="link" href="https://www.chevrolet.co.kr/purchase/online.gm" target="_blank" rel="noreferrer">https://www.chevrolet.co.kr/purchase/online.gm</a>
                        </li>
                        <li className="item">
                            담당업무 :
                            <ul className="role_list">
                                <li>페이지 제작(HTML, CSS) : 인덱스, 차량 선택, 차량 주문, 결제, 주문 관리 (100%)</li>
                                <li>페이지 기능(Javascript, jQuery, Ajax) : 인덱스, 차량 선택, 차량 주문 (80%)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default ProjectDetail;