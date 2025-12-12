import theme from "../styles/Theme";
import { StyleSperator, StyleDivision, StyleNoLineSperator } from '../styles/StyleCommon'

import { StyleCopyright, StyleContactWord, StyleMail, StyleThanks } from "../styles/StyleContact"
import { StyleContents, StyleContent, StyleLookBack } from "../styles/StyleProjects"


const Contact = () => {
    return (
        <div>
            <StyleDivision>그래서 저는요</StyleDivision>
            <StyleContents>
                <StyleLookBack>🧑‍💻 ISTP 개발자로서, 문제를 논리적으로 분석하고 필요한 부분만 빠르게 파고드는 타입입니다.</StyleLookBack>
                <StyleLookBack>🔥 처음 접하는 기술이나 구조도 직접 손으로 만져보며 이해하고, 해결하는 과정에서 즐거움을 느낍니다.</StyleLookBack>
                <StyleLookBack>💡 모르는 것을 두려워하지 않고, 끝까지 해결 방법을 찾는 끈기와 실전형 학습 스타일을 갖고 있습니다.</StyleLookBack>
                <StyleLookBack>💻 "정확하게 동작하는 코드"에 가치를 두고, 필요 없는 말보다 직접 구현하며 소통하는 방식을 선호합니다.</StyleLookBack>

                <StyleSperator />
                <StyleLookBack>비전공자로 IT를 처음 접한 후, 매일 오전 9시부터 오후 6시까지 수업을 듣고, 그 이후에도 학원에 남아 꾸준히 학습하며 기술을 익혔습니다.</StyleLookBack>
                <StyleLookBack>새로운 도전에 두려움 없이 임하고, 모르는 내용은 직접 파고들어 이해할 때까지 탐구하는 태도를 유지해 왔습니다.</StyleLookBack>
                <StyleLookBack>여러 프로젝트를 수행하며 실무형 백엔드 역량을 쌓고, 동시에 문제를 끝까지 해결하려는 책임감과 끈기를 키웠습니다.</StyleLookBack>
                <StyleLookBack>실시간 레스토랑 예약, 전자기기 쇼핑몰 등 다양한 프로젝트를 경험하며</StyleLookBack>
                <StyleLookBack>동시성 처리, 데이터 구조 설계, API 연동 등 실제 서비스 개발에서 필요한 기술적 과제들을 해결해 왔습니다.</StyleLookBack>
                <StyleLookBack>이러한 경험을 바탕으로 새로운 기술에도 빠르게 적응하며, 팀과 서비스에 즉시 기여할 수 있는 개발자로 성장하고 있습니다.</StyleLookBack>
            </StyleContents>

            <footer id="footer">
                <StyleThanks theme={theme}>읽어주셔서 감사합니다.</StyleThanks>
                <StyleContactWord theme={theme}>
                    <a href={"https://apdkfldbwls.tistory.com/"} target={"_blank"}>blog</a> | <a href={"https://github.com/yudinee"} target={"_blank"}>github</a> | <a href={"https://www.notion.so/292ceb0fa3954b4fb88ee3d892ab9090?v=8be7443c4cdc411eaaaca98148e7d594"} target={"_blank"}>notion</a> | <a href={"mailto:apdkfldbwls@naver.com"}>email</a>
                    </StyleContactWord>
            </footer>
        </div>
    );
}

export default Contact;

