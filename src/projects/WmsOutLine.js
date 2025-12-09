import wms1 from "../images/project/wms1.png"

const WmsOutLine = () => {
    return (
        <div style={{ padding: '20px 0', textAlign: 'left' }}>
            <img src={wms1} alt="피치스토어1" style={{ width: '100%', maxWidth: '800px', marginBottom: '20px', borderRadius: '8px' }} />
            <h3 style={{ fontSize: '1.2em', marginBottom: '15px', color: '#fff', fontWeight: 'bold' }}>개요</h3>

            <div style={{ marginBottom: '10px' }}>
                <span style={{ color: '#ddd', fontSize: '0.9em' }}>
                사용자가 식품 재고를 정확하고 효율적으로 관리할 수 있는 웹 기반 WMS(창고 관리 시스템)을 구현했습니다.
                유통기한을 고려한 입·출고 처리, 재고 이동, 지점 주문, 공급사 관리, 본사-지점 간 채팅 등 실제 물류 업무에 필요한 핵심 기능을 직접 설계·구현하며 물류 데이터 흐름 이해도, 재고 관리 로직, 권한·지점 구조 처리, 실시간 정보 제공 경험을 강화했습니다.
                </span>
            </div>
        </div>
    )
}

export default WmsOutLine
