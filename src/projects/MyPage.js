import theme from "../styles/Theme";

import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage, StyleLookBack } from "../styles/StyleProjects"



const MyPage = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea theme={theme}>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle><strong style={{fontWeight: 900}}>마이페이지</strong></StyleProjectTitle>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContents>
                            <StyleContent>사용자가 자신의 주문 내역을 확인하고, 주문 취소 및 리뷰 관리를 하며, 등급 조회와 문의/문의 답변 확인까지 가능한 통합 관리 화면</StyleContent>
                        </StyleContents>
                    

                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default MyPage