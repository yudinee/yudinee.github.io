import theme from "../styles/Theme";
import { StyleMajor, StyleMajorDate, StyleMajorCompany, StyleMajorExplain } from "../styles/StyleMajor"
import { StyleSperator, StyleDivision } from '../styles/StyleCommon'

const Major = () => {
  return (
    <div>
        <StyleDivision>열심히 달리고 있어요</StyleDivision>
          <StyleMajor theme={theme}>
            <StyleMajorDate theme={theme}>2025.09.08~2025.10.20</StyleMajorDate>
            <StyleMajorCompany theme={theme}>테이블토피아</StyleMajorCompany>
            <StyleMajorExplain theme={theme}>실시간 테이블 예약 및 웨이팅과 AI 추천 기능을 갖춘 레스토랑 플랫폼 개발</StyleMajorExplain>
          </StyleMajor>
          <StyleMajor theme={theme}>
            <StyleMajorDate theme={theme}>2025.07.10~2025.08.05</StyleMajorDate>
            <StyleMajorCompany theme={theme}>PeachStore</StyleMajorCompany>
            <StyleMajorExplain theme={theme}>기종, 색상, 용량 등을 커스터마이징할 수 있는 전자기기를 판매하는 전자상거래 플랫폼 개발</StyleMajorExplain>
          </StyleMajor>
          <StyleMajor theme={theme}>
            <StyleMajorDate theme={theme}>2025.06.02~2025.06.29</StyleMajorDate>
            <StyleMajorCompany theme={theme}>Shinlogis WMS</StyleMajorCompany>
            <StyleMajorExplain theme={theme}>창고 내 상품의 입고, 출고, 재고, 보관 현황 등을 체계적으로 관리할 수 있도록 구축한 경량형 창고관리시스템 개발</StyleMajorExplain>
          </StyleMajor>
    </div>
  );
}

export default Major;
