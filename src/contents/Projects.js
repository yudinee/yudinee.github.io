import theme from "../styles/Theme";

import { StyleCompany, StyleCompanyIcon } from "../styles/StyleProjects"
import { StyleSperator, StyleDivision, StyleNoLineSperator } from '../styles/StyleCommon'

import Waiting from "../projects/Waiting";
import VerticalAdmin from "../projects/VerticalAdmin"
import Catalog from "../projects/Catalog"
import Inspection from "../projects/Inspection"
import CouponAdmin from "../projects/CouponAdmin"
import BehindCoupon from "../projects/BehindCoupon"
import RoulettePromotion from "../projects/RoulettePromotion"
import HfRenewal from "../projects/HfRenewal"
import PomPom from "../projects/PomPom"
import TableTopiaSkills from "../projects/TableTopiaSkills"
import TableTopiaOutLine from "../projects/TableTopiaOutLine"
import TableTopiaRoll from "../projects/TableTopiaRoll"
import WaitingProblem from "../projects/WaitingProblem"
import TableTopiaMainPage from "../projects/TableTopiaMainPage"

import Bunjang from "../images/company/bunjang.png"
import Ibksystem from "../images/company/ibksystem.png"
import Tmon from "../images/company/tmon.png"

const Projects = () => {
    return (
        <div>
            <StyleDivision>다양한 프로젝트를 경험을 했어요</StyleDivision>

            <StyleCompany>테이블토피아 | 2025.09.08 - 2025.10.20</StyleCompany>
            <TableTopiaOutLine></TableTopiaOutLine>
            <TableTopiaSkills></TableTopiaSkills>
            <TableTopiaRoll></TableTopiaRoll>
            <Waiting></Waiting>
            <WaitingProblem></WaitingProblem>
            <TableTopiaMainPage></TableTopiaMainPage>
            <StyleNoLineSperator></StyleNoLineSperator>

            <StyleCompany><StyleCompanyIcon theme={theme} src={Ibksystem} title="IBK시스템" alt="" /> IBK시스템 | 2020.03 - 2021.07</StyleCompany>
            <HfRenewal></HfRenewal>
            <StyleNoLineSperator></StyleNoLineSperator>

            <StyleCompany><StyleCompanyIcon theme={theme} src={Tmon} title="티몬" alt="" /> 티몬 | 2018.01 - 2020.02</StyleCompany>
            <RoulettePromotion></RoulettePromotion>
            <BehindCoupon></BehindCoupon>
            <CouponAdmin></CouponAdmin>

            {/* <StyleDivision>틈틈히 만들어봤어요</StyleDivision> */}
            {/* <PomPom></PomPom> */}
        </div>
    )
}

export default Projects