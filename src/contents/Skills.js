import theme from "../styles/Theme";
import { StyleSkillLevel, StyleTechImage } from "../styles/StyleSkills"
import { StyleSperator, StyleDivision } from '../styles/StyleCommon'

// Backend
import Java from "../images/tech_icon/java.png"
import SpringBoot from "../images/tech_icon/springboot.png"
import Spring from "../images/tech_icon/spring.png"
import JPA from "../images/tech_icon/jpa.png"
import Maven from "../images/tech_icon/maven.png"
import Mybatis from "../images/tech_icon/mybatis.png"

// Frontend
import Reacts from "../images/tech_icon/react.png"
import Js from "../images/tech_icon/js.png"
import Html5 from "../images/tech_icon/html5.png"
import Css from "../images/tech_icon/css.png"
import Bootstrap from "../images/tech_icon/bootstrap.png"

// Database
import Mysql from "../images/tech_icon/mysql.png"

// Collaboration & Version Control
import Git from "../images/tech_icon/git.png"
import Github from "../images/tech_icon/github.png"
import Jira from "../images/tech_icon/jira.png"

const Skills = () => {
    return (
        <div>
            <section>
                <StyleDivision>이만큼 노력하고 있어요</StyleDivision>

                <StyleSkillLevel>Backend</StyleSkillLevel>
                <StyleTechImage theme={theme} src={Java}/>
                <StyleTechImage theme={theme} src={SpringBoot}/>
                <StyleTechImage theme={theme} src={Spring}/>
                <StyleTechImage theme={theme} src={JPA}/>
                <StyleTechImage theme={theme} src={Maven}/>
                <StyleTechImage theme={theme} src={Mybatis}/>

                <StyleSkillLevel>Frontend</StyleSkillLevel>
                <StyleTechImage theme={theme} src={Reacts}/>
                <StyleTechImage theme={theme} src={Js}/>
                <StyleTechImage theme={theme} src={Html5}/>
                <StyleTechImage theme={theme} src={Css}/>
                <StyleTechImage theme={theme} src={Bootstrap}/>

                <StyleSkillLevel>Database</StyleSkillLevel>
                <StyleTechImage theme={theme} src={Mysql}/>

                <StyleSkillLevel>Collaboration & Version Control</StyleSkillLevel>
                <StyleTechImage theme={theme} src={Git}/>
                <StyleTechImage theme={theme} src={Github}/>
                <StyleTechImage theme={theme} src={Jira}/>
            </section>
        </div>
    )
}

export default Skills
