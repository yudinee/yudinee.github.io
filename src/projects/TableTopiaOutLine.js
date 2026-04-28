import TableTopiaMain from "../images/project/TableTopiaMain.png"

const TableTopiaOutLine = () => {
    return (
        <div style={{ padding: '20px 0', textAlign: 'left' }}>
            <img src={TableTopiaMain} alt="테이블토피아 메인" style={{ width: '100%', maxWidth: '800px', marginBottom: '20px', borderRadius: '8px' }} />
            <h3 style={{ fontSize: '1.2em', marginBottom: '15px', color: '#fff', fontWeight: 'bold' }}>개요</h3>

            <div style={{ marginBottom: '10px' }}>
                <span style={{ color: '#ddd', fontSize: '0.9em' }}>
                    테이블 토피아는 실시간 레스토랑 예약 서비스로, 주요 기능으로는 실시간 웨이팅, 예약, 챗봇이 있습니다.
                    실시간 웨이팅을 통해 고객은 직접 줄 서야 하는 불편함을 줄일 수 있으며, 예약 시 선호 테이블 선택이 가능해 기존 서비스와 차별화했습니다.
                </span>
            </div>
        </div>
    )
}

export default TableTopiaOutLine
