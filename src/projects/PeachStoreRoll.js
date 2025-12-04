const PeachStoreRoll = () => {
    return (
        <div style={{ padding: '20px 0', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.2em', marginBottom: '15px', color: '#fff', fontWeight: 'bold' }}>역할</h3>

            <div style={{ marginBottom: '10px' }}>
                <span style={{ color: '#aaa', fontSize: '0.9em' }}>- </span>
                <span style={{ color: '#ddd', fontSize: '0.9em' }}>
                   <strong style={{ color: '#fff', fontWeight: '700' }}>마이페이지 기능 개발</strong>
                   <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                       - 주문 조회·취소<br/>
                       - 리뷰 작성/수정/삭제<br/>
                       - 사용자 등급 조회
                   </div>
                </span>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <span style={{ color: '#aaa', fontSize: '0.9em' }}>- </span>
                <span style={{ color: '#ddd', fontSize: '0.9em' }}>
                   <strong style={{ color: '#fff', fontWeight: '700' }}>문의(Q&A) 기능 개발</strong> : 사용자 문의 등록/수정/삭제, 관리자 답변 조회 기능 구현
                </span>
            </div>
        </div>
    )
}

export default PeachStoreRoll
