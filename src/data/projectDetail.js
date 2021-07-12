const projectDetailData = {
    'onlineShop': {
        'subj': '쉐보레 온라인 샵',
        'img': 'online_shop',
        'txt': [
            `고객들이 오프라인 전시장을 방문하지 않고 온라인을 통해 쉐보레 차량을 구매가 가능하도록 제공하는 서비스 입니다.
            사용자가 구매를 원하는 차량을 선택하고 본인의 상황에 맞게 견적 옵션들이 선택 가능합니다.
            사용자 선택에 따라 단계별로 옵션들이 동적으로 변하며 모든 옵션을 선택 완료 후 최종 단계에서 사용자가 선택한 옵션들을
            견적서 형식으로 보여주도록 제작하였습니다.`,
            `데이터 통신을 이용해 받아온 데이터들을 화면에 만들어 주는 것은 어렵지 않았으나, 사용자 선택에 따라 옵션들이 동적으로 변하게 하는 부분이 어려웠습니다.
            옵션에 따라 받아온 가격 데이터에 부가세가 포함되어 있다거나, 단위가 10만원 단위로 되어야하는 등등의 계산 공식이 다르게 정해져
            계산식을 잘못 적용할 경우 잘못된 가격이 화면에 노출되어 사용자에게 큰 혼란을 주고 실제 온라인에서 결제까지 이루어지기 때문에 수차례 확인 과정을 거치고 주의해서 제작하여 문제없이 오픈하였고
            많이 배울 수 있었습니다.`
        ],
        'tech': 'HTML, CSS, Javascript, jQuery, Ajax',
        'link': 'https://www.chevrolet.co.kr/purchase/online.gm',
        'role': [
            `페이지 제작(HTML, CSS) : 인덱스, 차량 선택, 차량 주문, 결제, 주문 관리 (100%)`,
            `페이지 기능(Javascript, jQuery, Ajax) : 인덱스, 차량 선택, 차량 주문 (80%)`
        ]
    },
    'hanWha': {
        'subj': '한화건설',
        'img': 'hanwha',
        'txt': [
            `기존 한화건설 사이트 리뉴얼 프로젝트로 저를 포함 2명이서 프로젝트를 진행하였고 고객사에서 원하는 접근성 준수 기준이 있어 접근성을 고려하여 코딩하여 웹와치 심사를 통과하였습니다.`,
            `메인페이지에서 youtube api를 사용해 영상을 컨트롤 하였고, 슬라이드는 swiper.js 를 사용해서 제작했습니다. 
            관리자로 연동되는 페이지들이 많아 관리자에서 입력한 내용들이 틀어지지 않고 나오도록 주의해서 코딩했습니다.
            `
        ],
        'tech': 'HTML, CSS, Javascript, jQuery, YouTube API, Swiper.js',
        'link': 'https://www.hwenc.co.kr/',
        'role': [
            `페이지 제작(HTML, CSS) : 메인페이지(100%), 서브페이지 : 회사소개(100%), 사업분야(30%), 지속가능경영(85%), 홍보센터(100%), 고객센터(100%)`,
            `페이지 기능(Javascript, jQuery, YouTube API, Swiper.js) : 메인페이지(100%), 서브페이지 : 회사소개(100%), 사업분야(10%), 지속가능경영(85%), 홍보센터(100%), 고객센터(100%)`
        ]
    }
}

export default projectDetailData;