import theme from "../styles/Theme";
import { StyleProject, StyleProjectTitle, StyleContentsArea, StyleContentsLeft, StyleContentsRight, StyleContentsTitle, StyleContents, StyleContent, StyleProjectImage, StyleImages, StyleImage } from "../styles/StyleProjects"
import { StyleDivision } from '../styles/StyleCommon'

const Class = () => {
    return (
    <div>
<StyleDivision>교육 경험이 있어요</StyleDivision>
    <StyleProject>
        <StyleContentsArea theme={theme}>
            <StyleContentsLeft>
                <blockquote>
                    <StyleProjectTitle>2025.04 ~ 2025.11</StyleProjectTitle>
                    <StyleProjectTitle>신세계 I&C 교육 수료</StyleProjectTitle>
                </blockquote>
            </StyleContentsLeft>
            <StyleContentsRight>
                <StyleContent>신세계아이앤씨에서 운영하는 실무 기반 백엔드·프론트엔드 개발 교육 수료</StyleContent>
                <StyleContent>Spring Boot 기반 백엔드 API 개발, DB 설계, REST API 구축 실습</StyleContent>
                <StyleContent>React 기반 프론트엔드 UI/UX 구현 및 API 연동 경험</StyleContent>
                <StyleContent>Git/GitHub 협업, 요구사항 분석, 실무형 팀 프로젝트 수행</StyleContent>
                <StyleContent>실제 서비스 아키텍처와 유사한 환경에서 프로젝트 설계 및 구현</StyleContent>
            </StyleContentsRight>
        </StyleContentsArea>
    </StyleProject>

    <StyleProject>
        <StyleContentsArea theme={theme}>
            <StyleContentsLeft>
                <blockquote>
                    <StyleProjectTitle>2023.09 ~ 2024.03</StyleProjectTitle>
                    <StyleProjectTitle>이젠아카데미 교육 수료</StyleProjectTitle>
                </blockquote>
            </StyleContentsLeft>
            <StyleContentsRight>
                <StyleContent>이젠아카데미에서 운영하는 Java 백엔드 개발 국비 과정 수료</StyleContent>
                <StyleContent>Java, Spring Framework, DB 설계 및 SQL 기반 백엔드 핵심 기술 학습</StyleContent>
                <StyleContent>JPA를 활용한 CRUD 구현과 객체-관계 매핑 실습</StyleContent>
                <StyleContent>Git/GitHub을 활용한 협업 및 요구사항 분석 경험</StyleContent>
            </StyleContentsRight>
        </StyleContentsArea>
    </StyleProject>


  
    </div>
    );
}

export default Class;

