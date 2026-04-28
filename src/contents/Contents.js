
import Skills from './Skills'
import Projects from './Projects'
import Class from './Class'
import Contact from './Contact'
import { StyleSperator } from '../styles/StyleCommon'

const Contents = () => {
    return (
        <div id="main" className="wrapper style1">
            <div className="container">

                <div id="skills"><Skills></Skills></div>
                <StyleSperator></StyleSperator>

                <div id="projects"><Projects></Projects></div>
                <StyleSperator></StyleSperator>

                <div id="class"><Class></Class></div>
                <StyleSperator></StyleSperator>

                <Contact></Contact>
            </div>
        </div>
    );
}

export default Contents;