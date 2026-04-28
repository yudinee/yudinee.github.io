import { StyleDivision } from '../styles/StyleCommon'

const Row = ({ period, title, items, accent = '#3b82f6' }) => (
    <div style={{
        display: 'flex',
        gap: '24px',
        paddingBottom: '32px',
    }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: accent, marginTop: '5px', flexShrink: 0,
            }} />
            <div style={{ flex: 1, width: '1px', background: 'rgba(255,255,255,0.1)', marginTop: '6px' }} />
        </div>
        <div style={{ flex: 1, paddingBottom: '4px' }}>
            <div style={{ color: '#777', fontSize: '0.82em', marginBottom: '4px' }}>{period}</div>
            <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1em', marginBottom: '10px' }}>{title}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {items.map((item, i) => (
                    <li key={i} style={{ color: '#bbb', fontSize: '0.88em', lineHeight: '1.6', display: 'flex', gap: '8px' }}>
                        <span style={{ color: accent, flexShrink: 0 }}>—</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

const CertRow = ({ title, period, accent = '#a78bfa' }) => (
    <div style={{ display: 'flex', gap: '24px', paddingBottom: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: accent, marginTop: '5px', flexShrink: 0,
            }} />
        </div>
        <div style={{ flex: 1 }}>
            <div style={{ color: '#777', fontSize: '0.82em', marginBottom: '4px' }}>{period}</div>
            <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '1em' }}>{title}</span>
        </div>
    </div>
)

const SectionLabel = ({ children }) => (
    <div style={{
        fontSize: '0.78em', fontWeight: 'bold', letterSpacing: '0.08em',
        color: '#888', textTransform: 'uppercase', marginBottom: '20px',
    }}>
        {children}
    </div>
)

const Class = () => {
    return (
        <div>
            <StyleDivision>학력 &amp; 경험이 있어요</StyleDivision>

            {/* 교육 + 학력 */}
            <div style={{ marginBottom: '8px' }}>
                <SectionLabel>Courses</SectionLabel>
                <Row
                    period="2025.04 ~ 2025.11"
                    title="신세계 I&C — 실무 백엔드·프론트엔드 개발 과정"
                    items={[
                        'Spring Boot 기반 백엔드 API 개발, DB 설계, REST API 구축',
                        'React 기반 프론트엔드 UI/UX 구현 및 API 연동',
                        'Git/GitHub 협업, 실무형 팀 프로젝트 수행',
                    ]}
                    accent="#3b82f6"
                />
                <Row
                    period="2023.09 ~ 2024.03"
                    title="이젠아카데미 — Java 백엔드 개발 국비 과정"
                    items={[
                        'Java, Spring Framework, DB 설계 및 SQL 기반 백엔드 핵심 기술 학습',
                        'JPA를 활용한 CRUD 구현과 객체-관계 매핑 실습',
                        'Git/GitHub 협업 및 요구사항 분석 경험',
                    ]}
                    accent="#3b82f6"
                />
                <Row
                    period="2016.02 ~ 2022.02"
                    title="안양대학교 — 관광경영학과"
                    items={['비전공자로 개발에 입문, 이후 교육 과정을 통해 백엔드 역량 전환']}
                    accent="#3b82f6"
                />
            </div>

            {/* 자격증 */}
            <div>
                <SectionLabel>Certifications</SectionLabel>
                <CertRow
                    period="2025"
                    title="정보처리기사 필기 (실기 준비 중)"
                    accent="#a78bfa"
                />
            </div>
        </div>
    )
}

export default Class
