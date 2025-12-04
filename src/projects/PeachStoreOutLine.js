import PeachStore1 from "../images/project/PeachStore1.png"

const PeachStoreOutLine = () => {
    return (
        <div style={{ padding: '20px 0', textAlign: 'left' }}>
            <img src={PeachStore1} alt="피치스토어1" style={{ width: '100%', maxWidth: '800px', marginBottom: '20px', borderRadius: '8px' }} />
            <h3 style={{ fontSize: '1.2em', marginBottom: '15px', color: '#fff', fontWeight: 'bold' }}>개요</h3>

            <div style={{ marginBottom: '10px' }}>
                <span style={{ color: '#ddd', fontSize: '0.9em' }}>
                    사용자가 전자기기를 쉽고 빠르게 탐색·구매할 수 있는웹 기반 쇼핑몰을 구현했습니다.
                    상품 등록·수정, 이미지 업로드, 장바구니, 주문 처리 등 실제 전자상거래 서비스에 필요한 핵싱 기능을 직접 설계하고 개발하며 MVC 아키텍처 이해도, 세션 기반 인증 처리, 이미지 관리 로직, 협업 개발 경험을 강화했습니다.
                </span>
            </div>
        </div>
    )
}

export default PeachStoreOutLine
