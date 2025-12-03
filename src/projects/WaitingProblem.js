import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'

import TableTopia3 from "../images/project/TableTopia3.png"

const WaitingProblem = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle><strong style={{fontWeight: 900}}>웨이팅 시스템 동시성 문제 해결</strong></StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>AS-IS</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>여러 사용자가 동시에 웨이팅/예약 요청 시 DB 내 중복 인서트나 순서 꼬임 발생</StyleContent>
                            <StyleContent>중복 데이터 및 오류로 직원 수동 조정 필요</StyleContent>
                            <StyleContent>동시 예약 시 순서가 꼬여 불편 발생</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>TO-BE</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>DB 트랜잭션과 Pessimistic Lock을 활용하여 동시에 들어오는 요청 처리 순서를 제어</StyleContent>
                            <StyleContent>중복 인서트 및 순서 꼬임 방지, 안정적 웨이팅/예약 처리</StyleContent>
                            <StyleContent>사용자에게 정확한 대기 순서 제공, 혼선 방지</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>주요효과</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>안정적인 웨이팅/예약 처리, 고객 만족도 향상</StyleContent>
                            <StyleContent>직원 개입 최소화, 시스템 신뢰성 확보</StyleContent>
                            <StyleContent>정량적 성과: 동시 예약 오류 0건, 중복 예약 발생 없음</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={TableTopia3} title="테이블토피아1" alt="" style={{width: '400px'}} />
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

export default WaitingProblem