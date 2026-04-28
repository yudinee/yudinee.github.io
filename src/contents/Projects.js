import { StyleDivision } from '../styles/StyleCommon'
import ProjectCard from '../projects/ProjectCard'

import TableTopiaOutLine from "../projects/TableTopiaOutLine"
import TableTopiaRoll from "../projects/TableTopiaRoll"
import Waiting from "../projects/Waiting"
import WaitingProblem from "../projects/WaitingProblem"
import TableTopiaMainPage from "../projects/TableTopiaMainPage"

import PeachStoreOutLine from "../projects/PeachStoreOutLine"
import PeachStoreRoll from "../projects/PeachStoreRoll"
import Order from "../projects/Order"
import Review from "../projects/Review"

import WmsOutLine from "../projects/WmsOutLine"
import WmsRoll from "../projects/WmsRoll"
import WmsMembers from "../projects/WmsMembers"
import Supplier from "../projects/Supplier"
import WmsChat from "../projects/WmsChat"

const Projects = () => {
    return (
        <div>
            <StyleDivision>다양한 프로젝트를 경험을 했어요</StyleDivision>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px',
            }}
                className="project-grid"
            >
                <ProjectCard
                    icon="🍽️"
                    title="테이블토피아"
                    subtitle="실시간 레스토랑 예약 & 웨이팅 플랫폼 with 생성형 AI"
                    period="2025.09 ~ 2025.10"
                    team="5인 팀"
                    tech={['Java21', 'Spring Boot3', 'Spring Security', 'JPA', 'React', 'MySQL', 'Redis', 'WebSocket', 'JWT', 'AWS']}
                    myRole="웨이팅 관리 · 사용자 페이지 개발"
                    github="https://github.com/zero5ive/Tabletopia"
                >
                    <TableTopiaOutLine />
                    <TableTopiaRoll />
                    <Waiting />
                    <WaitingProblem />
                    <TableTopiaMainPage />
                </ProjectCard>

                <ProjectCard
                    icon="🛒"
                    title="PeachStore"
                    subtitle="전자기기 전문 쇼핑몰 웹 서비스"
                    period="2025.07 ~ 2025.08"
                    team="5인 팀"
                    tech={['Java', 'Spring Framework', 'MyBatis', 'JSP', 'MySQL', 'Bootstrap', 'jQuery']}
                    myRole="마이페이지 · Q&A 기능 개발"
                    github="https://github.com/zero5ive/Peach-Store"
                >
                    <PeachStoreOutLine />
                    <PeachStoreRoll />
                    <Order />
                    <Review />
                </ProjectCard>

                <ProjectCard
                    icon="🏭"
                    title="Shinlogis-WMS"
                    subtitle="식품 재고 창고 관리 시스템 (웹 기반 WMS)"
                    period="2025.06.02 ~ 2025.06.29"
                    team="팀 프로젝트"
                    tech={['Java', 'Java Swing', 'Socket', 'MySQL', 'Apache Tomcat', 'Jakarta Mail', 'JFreeChart']}
                    myRole="회원관리 · 공급사관리 · 채팅 기능 개발"
                    github="https://github.com/zero5ive/Shinlogis-WMS"
                >
                    <WmsOutLine />
                    <WmsRoll />
                    <WmsMembers />
                    <Supplier />
                    <WmsChat />
                </ProjectCard>
            </div>
        </div>
    )
}

export default Projects
