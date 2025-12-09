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
                        <StyleContentsTitle>주요효과</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>실시간 채팅 구현으로 본사–지점 간 소통 속도 및 대응력 향상</StyleContent>
                            <StyleContent>전화/메모 의존에서 벗어나 커뮤니케이션 효율성 극대화</StyleContent>
                            <StyleContent>즉시 메시지 송수신으로 업무 정확도와 처리 안정성 확보</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={wms6} title="wms6" alt="" style={{width: '400px'}} />
                            <StyleImage theme={theme} src={wms7} title="wms7" alt="" style={{width: '400px'}} />
                        </StyleImages>
                        
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>

            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle><strong style={{fontWeight: 900}}>회고</strong></StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        
                        <StyleContents>
                          이번 프로젝트를 통해 처음 소켓 통신을 활용한 실시간 채팅을 구현하며, 예상치 못한 오류와 시행착오를 겪었지만 문제를 하나씩 해결하며 실시간 통신 로직과 흐름 이해를 높일 수 있었습니다.
                          또한 MVC 패턴을 적용해 화면(UI), 로직, 데이터 관리를 명확히 분리하고, JDBC를 직접 연동하여 데이터 흐름과 CRUD 구조를 직접 설계·운영함으로써 백엔드 데이터 처리와 DB 연동 경험을 크게 향상시킬 수 있었습니다.
                          이번 경험을 통해 시스템 구조 설계, 데이터 흐름 이해, 실시간 통신 구현 능력을 모두 강화할 수 있었으며, 향후 더 복잡한 서비스 구현에도 자신감을 얻었습니다.
                        </StyleContents>
                        <StyleContents>
                            <br />
                            👏 이번 프로젝트에 대한 자세한 자료(PPT)는 아래 링크에서 확인 가능합니다.
                            <br />
                            <a href="https://docs.google.com/presentation/d/1PITS4AdTCD2a7TQgUccYgOctPyhp4ryY/edit?slide=id.p1#slide=id.p1" target="_blank" rel="noopener noreferrer">📎 프로젝트 PPT 보기</a>
                        </StyleContents>
                        
                   

                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default WmsChat