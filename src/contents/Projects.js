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
import PeachStoreSkills from "../projects/PeachStoreSkills"
import PeachStoreOutLine from "../projects/PeachStoreOutLine"
import PeachStoreRoll from "../projects/PeachStoreRoll"
import MyPage from "../projects/MyPage"
import Order from "../projects/Order"
import Review from "../projects/Review"
import WmsSkills from "../projects/WmsSkiils"
import WmsOutLine from "../projects/WmsOutLine"
import WmsRoll from "../projects/WmsRoll"
import WmsMembers from "../projects/WmsMembers"
import Supplier from "../projects/Supplier"
import WmsChat from "../projects/WmsChat"

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

            <StyleCompany>peachstore | 2025.07.10 - 2025.08.05</StyleCompany>
            <PeachStoreOutLine></PeachStoreOutLine>
            <PeachStoreSkills></PeachStoreSkills>
            <PeachStoreRoll></PeachStoreRoll>
            <MyPage></MyPage>
            <Order></Order>
            <Review></Review>
            <StyleNoLineSperator></StyleNoLineSperator>

            <StyleCompany>Shinlogis-WMS | 2025.06.02 - 2025.06.29</StyleCompany>
            <WmsOutLine></WmsOutLine>
            <WmsSkills></WmsSkills>
            <WmsRoll></WmsRoll>
            <WmsMembers></WmsMembers>
            <Supplier></Supplier>
            <WmsChat></WmsChat>
       

            {/* <StyleDivision>틈틈히 만들어봤어요</StyleDivision> */}
            {/* <PomPom></PomPom> */}
        </div>
    )
}

export default Projects