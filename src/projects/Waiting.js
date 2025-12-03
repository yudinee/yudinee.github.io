import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'

import TableTopia1 from "../images/project/TableTopia1.png"
import TableTopia2 from "../images/project/TableTopia2.png"

const Waiting = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle><strong style={{fontWeight: 900}}>레스토랑 실시간 웨이팅</strong></StyleProjectTitle>
                            레스토랑에서 웨이팅을 오픈할 시 실시간으로 웨이팅을 등록, 취소, 미루기할 수 있는 기능 <br></br>
                            관리자 페이지에서 등록, 취소한 사용자 확인 가능
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>AS-IS</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>고객이 직접 매장에 와서 줄을 서야 함, 대기 시간 확인 불가</StyleContent>
                            <StyleContent>전화·수기 관리로 중복 예약 및 업무 중단 발생</StyleContent>
                            <StyleContent>대기 중인 순서와 예상 시간 확인 불가</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>TO-BE</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>실시간 웨이팅 기능 구현으로 앱에서 대기 현황 확인 가능, 직접 줄 설 필요 없음</StyleContent>
                            <StyleContent>웨이팅 등록/취소/미루기 기능으로, 직원 업무 효율 향상</StyleContent>
                            <StyleContent>고객은 앱에서 대기 순서 확인 가능</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>주요효과</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>고객 편의성 향상: 혼선 없이 대기 가능</StyleContent>
                            <StyleContent>매장 효율성 향상: 중복 예약 및 업무 중단 최소화</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={TableTopia1} title="테이블토피아1" alt="" style={{width: '400px'}} />
                            <StyleImage theme={theme} src={TableTopia2} title="테이블토피아2" alt="" style={{width: '400px'}} />
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
        </div>
    )
}

export default Waiting