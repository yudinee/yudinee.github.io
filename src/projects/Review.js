import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"


import PeachStore4 from "../images/project/PeachStore4.png"
import PeachStore5 from "../images/project/PeachStore5.png"

const Review = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle><strong style={{fontWeight: 900}}>리뷰/문의(Q&A) 이미지 첨부 기능 개선</strong></StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>AS-IS</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>첨부한 이미지를 등록 전에 썸네일로 확인할 수 없음</StyleContent>
                            <StyleContent>잘못된 이미지를 선택했을 경우 전체를 초기화하거나 처음부터 다시 작성해야 하는 사용자 불편 존재</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>TO-BE</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>리뷰·문의 작성 시 첨부 이미지 썸네일 미리보기 기능 추가</StyleContent>
                            <StyleContent>썸네일 목록에서 개별 이미지 삭제 / 수정(교체) / 재첨부 가능</StyleContent>
                            <StyleContent>최종 제출 전에 사용자 스스로 이미지 품질 확인 가능 → 실수 업로드 방지</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>주요효과</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>사용자 경험(UX) 크게 향상</StyleContent>
                            <StyleContent>시각 기반 리뷰·문의 제공으로 상품 정보 신뢰도 상승</StyleContent>
                            <StyleContent>이미지 처리 로직 명확해져 기능 유지보수 용이</StyleContent>
                        </StyleContents>
                        <StyleImages>
                            <StyleImage theme={theme} src={PeachStore4} title="피치스토어4" alt="" style={{width: '400px'}} />
                            <StyleImage theme={theme} src={PeachStore5} title="피치스토어5" alt="" style={{width: '400px'}} />
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
                           이번 프로젝트에서 마이페이지 기능을 구현하며 처음으로 이미지 첨부 기능과 MyBatis를 활용한 주문/등급 조회를 경험했습니다.
                           이미지 첨부는 등록 전 미리보기와 개별 삭제/교체 기능 구현이 어려웠지만, 상태 관리와 UI 로직을 체계화하며 UX 중심 설계를 익혔습니다.
                           MyBatis는 복잡한 조인과 다중 테이블 조회에서 무한루프가 발생했으나, XML Mapper 구조를 재검토하고 쿼리 재사용 단위를 분리하여 해결했습니다.
                           이번 경험을 통해 새로운 기술을 적용할 때 문제 해결 과정과 구조화된 접근의 중요성을 배울 수 있었습니다.
                        </StyleContents>
                        <StyleContents>
                            <br />
                            👏 이번 프로젝트에 대한 자세한 자료(PPT)는 아래 링크에서 확인 가능합니다.
                            <br />
                            <a href="https://docs.google.com/presentation/d/1tnzRpMfacQmi7ylD0i0u9UTEoVutukby/edit?slide=id.p1#slide=id.p1" target="_blank" rel="noopener noreferrer">📎 프로젝트 PPT 보기</a>
                        </StyleContents>
                        
                   

                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default Review