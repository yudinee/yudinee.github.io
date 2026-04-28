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
                        <StyleImages>
                            <StyleImage theme={theme} src={PeachStore4} title="피치스토어4" alt="" style={{width: '400px'}} />
                            <StyleImage theme={theme} src={PeachStore5} title="피치스토어5" alt="" style={{width: '400px'}} />
                        </StyleImages>
                        
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>


        </div>
    )
}

export default Review