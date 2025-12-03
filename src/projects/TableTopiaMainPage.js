import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'

import TableTopia4 from "../images/project/TableTopia4.png"
import TableTopia5 from "../images/project/TableTopia5.png"

const WaitingProblem = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle><strong style={{fontWeight: 900}}>메인페이지 및 레스토랑 상세페이지</strong></StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>메인페이지</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>예약 많은 순, 찜 많은 순 top3 정렬 → 사용자 관심도 높은 매장 노출</StyleContent>
                            <StyleContent>위의 6개 매장 랜덤으로 배너 노출 → 방문 유도 및 노출 다양화</StyleContent>
                            <StyleContent>한식, 양식, 서울, 부산 등 종류 기준 필터 제공</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>상세페이지</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>메뉴 노출</StyleContent>
                            <StyleContent>구글 Maps API 이용하여 매장 위치 표시</StyleContent>
                            <StyleContent>운영 정보 제공</StyleContent>
                            <StyleContent>리뷰 및 별점 제공 → 사용자 선택에 도움 제공</StyleContent>
                        </StyleContents>
                        
                        <StyleImages>
                            <StyleImage theme={theme} src={TableTopia4} title="테이블토피아1" alt="" style={{width: '400px'}} />
                            <StyleImage theme={theme} src={TableTopia5} title="테이블토피아1" alt="" style={{width: '400px'}} />
                        </StyleImages>
                        {/* <StyleContentsTitle>[회고] 케어관</StyleContentsTitle>
                        <StyleLookBack>
                        비슷하면서도 다양한 지면의 요구사항 및 정책을 클라이언트에서 편하게 개발할 수 있도록 API 설계에 많은 고민을 하였습니다. 
                        요구사항에 대한 기준을 명확히하고 기획 정책에 따른 입력 출력을 정리하여, 최소한의 엔드포인트로 다양한 요구사항을 만족시킬 수 있으며 안정적이고 확장성 있는 API를 개발하였습니다. 
                        최종적으로, 케어관을 통한 번개케어 유료 거래 전환율이 증가하여 GMV가 40% 이상 성장하도록 기여할 수 있었습니다.
                        </StyleLookBack> */}

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
                            실시간 웨이팅 기능 개발 과정에서 발생한 동시성 문제를 DB 트랜잭션과 Pessimistic Lock을 활용해 해결하며, 처리 안정성과 시스템 신뢰성의 중요성을 깊이 이해했습니다.
                            또한, 프론트엔드와 백엔드 API 연동 과정에서 비동기 처리와 상태 관리를 직접 구현하며, 사용자 경험과 데이터 일관성을 동시에 고려한 개발 경험을 쌓았습니다.
                            이번 프로젝트를 통해 고객 편의성과 매장 효율을 동시에 개선하는 실무형 서비스를 설계하고 구현하는 능력을 강화할 수 있었습니다.
                        </StyleContents>
                        <StyleContents>
                            <br />
                            👏 이번 프로젝트에 대한 자세한 자료(PPT)는 아래 링크에서 확인 가능합니다.
                            <br />
                            <a href="https://docs.google.com/presentation/d/1Ug0KJFliuStT-ytbP-ySykoTjKB5IvKy/edit?slide=id.p2#slide=id.p2" target="_blank" rel="noopener noreferrer">📎 프로젝트 PPT 보기</a>
                        </StyleContents>
                        
                   

                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default WaitingProblem