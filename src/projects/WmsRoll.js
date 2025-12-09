const WmsRoll = () => {
    return (
        <div style={{ padding: '20px 0', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.2em', marginBottom: '15px', color: '#fff', fontWeight: 'bold' }}>역할</h3>

            <div style={{ marginBottom: '10px' }}>
                <span style={{ color: '#aaa', fontSize: '0.9em' }}>- </span>
                <span style={{ color: '#ddd', fontSize: '0.9em' }}>
                    <strong style={{ color: '#fff', fontWeight: '700' }}>회원관리 기능 개발</strong> : 로그인, 회원가입 및 마이페이지 기능 구현
                </span>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <span style={{ color: '#aaa', fontSize: '0.9em' }}>- </span>
                <span style={{ color: '#ddd', fontSize: '0.9em' }}>
                    <strong style={{ color: '#fff', fontWeight: '700' }}>공급사관리 기능 개발</strong>
                    <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                        - 공급사 목록 조회 및 검색<br />
                        - 정보 수정 및 다중 선택 비활성(삭제) 처리<br />
                    </div>
                </span>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <span style={{ color: '#aaa', fontSize: '0.9em' }}>- </span>
                <span style={{ color: '#ddd', fontSize: '0.9em' }}>
                    <strong style={{ color: '#fff', fontWeight: '700' }}>실시간 채팅 기능 개발</strong> : 동일 서버 내 본사와 지점 간 채팅 기능 구현
                </span>
            </div>
        </div>
    )
}

export default WmsRoll
