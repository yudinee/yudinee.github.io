import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"


import PeachStore2 from "../images/project/PeachStore2.png"
import PeachStore3 from "../images/project/PeachStore3.png"

const Order = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle><strong style={{fontWeight: 900}}>주문 조회·취소 / 사용자 등급 조회 (MyBatis 적용 개선)</strong></StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>AS-IS</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>일부 SQL은 XML Mapper를 사용했지만, 일부 조회·정렬 로직은 여전히 서비스/DAO 코드 내부에 문자열로 포함되어 있어 SQL 관리 위치가 분산됨</StyleContent>
                            <StyleContent>SQL이 코드와 XML에 혼재되어 있어 수정 시 영향을 받는 위치를 파악하기 어려움</StyleContent>
                            <StyleContent>유사한 조회 쿼리가 코드 내부에서 반복되어 중복 SQL 발생 및 유지보수 부담 증가</StyleContent>
                            <StyleContent>코드 내부 SQL은 문자열 기반이라 SQL 문법 오류가 실행 단계에서야 발견되는 위험 존재</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>TO-BE</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>주문·등급 조회에 필요한 핵심 SQL을 MyBatis XML Mapper로 일원화하여 관리</StyleContent>
                            <StyleContent>복잡한 조인·필터링·정렬 로직을 XML로 분리해 쿼리 구조가 명확해지고 가독성 향상</StyleContent>
                            <StyleContent>반복되는 조회 로직은 재사용 가능한 Mapper로 분리하여 중복 제거</StyleContent>
                            <StyleContent>SQL이 XML에서 관리되므로 변경 시 영향 범위가 뚜렷하고 유지보수 용이</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>주요효과</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>서비스 로직에서 SQL이 제거되어 비즈니스 로직이 명확하게 분리</StyleContent>
                            <StyleContent>복잡한 주문·등급 조회도 구조적으로 관리 가능</StyleContent>
                            <StyleContent>SQL 변경 시 리스크 감소 및 개발 안정성 향상</StyleContent>
                            <StyleContent>장기적으로 기능 확장에 유리한 구조 확보</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={PeachStore2} title="피치스토어2" alt="" style={{width: '400px'}} />
                            <StyleImage theme={theme} src={PeachStore3} title="피치스토어3" alt="" style={{width: '400px'}} />
                        </StyleImages>
                        
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default Order