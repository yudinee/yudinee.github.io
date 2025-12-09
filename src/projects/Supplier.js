import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"


import wms4 from "../images/project/wms4.png"
import wms5 from "../images/project/wms5.png"

const Supplier = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle><strong style={{fontWeight: 900}}>공급사 관리</strong></StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>AS-IS</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>공급사 정보가 산발적으로 관리되어 조회/검색이 불편</StyleContent>
                            <StyleContent>수정/삭제 시 단일 처리만 가능해 작업 비효율</StyleContent>
                            <StyleContent>삭제 시 데이터 보존 구조가 없어 기록 관리가 어려움</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>TO-BE</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>공급사 목록 조회·검색 기능 구현으로 빠른 탐색 가능</StyleContent>
                            <StyleContent>공급사 정보 수정 기능 제공</StyleContent>
                            <StyleContent>다중 선택 후 ‘비활성’ 처리로 안전한 소프트 삭제 방식 도입</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>주요효과</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>공급사 정보를 구조화하여 탐색·관리 효율이 크게 향상</StyleContent>
                            <StyleContent>다중 수정·삭제 처리로 업무 처리 속도 개선 및 작업 시간 단축</StyleContent>
                            <StyleContent>소프트 삭제 도입으로 데이터가 보존되어 운영 안정성과 기록 관리성 강화</StyleContent>
                            <StyleContent>공급사 정보 유지·관리 체계가 개선되어 전반적인 관리 품질 향상</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={wms4} title="wms4" alt="" style={{width: '400px'}} />
                            <StyleImage theme={theme} src={wms5} title="wms5" alt="" style={{width: '400px'}} />
                        </StyleImages>
                        
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default Supplier