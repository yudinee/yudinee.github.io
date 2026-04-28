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