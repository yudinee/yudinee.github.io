import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"


import wms6 from "../images/project/wms6.png"
import wms7 from "../images/project/wms7.png"

const WmsChat = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle><strong style={{fontWeight: 900}}>실시간 채팅</strong></StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>AS-IS</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>본사 ↔ 지점 간 소통이 전화/메모 등 수동 방식에 의존</StyleContent>
                            <StyleContent>실시간 대응이 어려워 처리 속도 저하</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>TO-BE</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>웹소켓 미학습 단계에서 소켓 통신 기반 실시간 채팅 구현</StyleContent>
                            <StyleContent>본사–공급사(지점) 간 즉시 메시지 송수신 가능</StyleContent>
                            <StyleContent>실시간 커뮤니케이션으로 처리 속도·업무 정확도 향상</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={wms6} title="wms6" alt="" style={{width: '400px'}} />
                            <StyleImage theme={theme} src={wms7} title="wms7" alt="" style={{width: '400px'}} />
                        </StyleImages>
                        
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>

        </div>
    )
}

export default WmsChat