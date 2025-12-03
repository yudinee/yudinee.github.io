import theme from "../styles/Theme";
import { StyleWookey } from "../styles/StyleMe"
import { StyleSperator, StyleDivision } from '../styles/StyleCommon'

const Me = () => {
    return (
        <div>
            <StyleDivision>Yujin🧑‍💻</StyleDivision>
            <blockquote>
                <StyleWookey theme={theme}>
                    <div>안정적이고 확장 가능한 백엔드를 고민하며, 이유 있는 코드로 팀에 신뢰를 줄 수 있는 개발자를 목표로 하고 있습니다.</div>
                </StyleWookey>
            </blockquote>
        </div>
    )
}

export default Me

