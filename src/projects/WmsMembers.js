import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"


import wms2 from "../images/project/wms2.png"
import wms3 from "../images/project/wms3.png"

const WmsMembers = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle><strong style={{fontWeight: 900}}>회원관리</strong></StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>AS-IS</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>중복 검사·유효성 검증이 없어 회원가입 시 오류 발생 빈도가 높음</StyleContent>
                            <StyleContent>비밀번호 암호화 미적용으로 보안 취약</StyleContent>
                            <StyleContent>아이디/비밀번호 찾기 기능 미흡하여 관리자가 직접 처리해야 함</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>TO-BE</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>아이디·이메일 중복 검사 자동화 및 비밀번호 유효성 검증 적용</StyleContent>
                            <StyleContent>비밀번호 암호화 저장으로 보안 강화</StyleContent>
                            <StyleContent>이메일 기반 비밀번호 찾기 자동화</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>주요효과</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>비밀번호 암호화 적용으로 보안 수준 강화 및 개인정보 보호</StyleContent>
                            <StyleContent>이메일 기반 복구 기능으로 사용자 편의성 및 서비스 신뢰도 상승</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={wms2} title="wms2" alt="" style={{width: '400px', maxHeight: '240px', objectFit: 'contain'}} />
                            <StyleImage theme={theme} src={wms3} title="wms3" alt="" style={{width: '400px', maxHeight: '240px', objectFit: 'contain'}} />
                        </StyleImages>
                        
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default WmsMembers