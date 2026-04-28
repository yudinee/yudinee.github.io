const links = [
  { label: 'Email', href: 'mailto:apdkfldbwls@naver.com' },
  { label: 'GitHub', href: 'https://github.com/yudinee' },
  { label: 'Blog', href: 'https://apdkfldbwls.tistory.com/' },
]

const navItems = [
  { label: 'Skills', sub: 'Tech Stack', target: 'skills' },
  { label: 'Projects', sub: '3 Projects', target: 'projects' },
  { label: '학력 & 경험', sub: 'Education', target: 'class' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const Intro = () => {
  return (
    <section
      id="banner"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', width: '100%', padding: '0 40px', textAlign: 'left' }}>

        {/* 서브타이틀 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{ width: '32px', height: '2px', background: '#3b82f6', borderRadius: '2px' }} />
          <span style={{ color: '#3b82f6', fontSize: '0.9em', fontWeight: '500', letterSpacing: '0.08em' }}>
            Backend Developer
          </span>
        </div>

        {/* 이름 */}
        <h1 style={{
          fontSize: '4em',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '28px',
          lineHeight: '1.15',
          letterSpacing: '-0.01em',
        }}>
          Yujin Seong.
        </h1>

        {/* 소개글 */}
        <div style={{ borderLeft: '2px solid rgba(59,130,246,0.4)', paddingLeft: '20px', marginBottom: '40px' }}>
          <p style={{ color: '#ddd', fontSize: '0.95em', lineHeight: '1.9', margin: 0 }}>
            Spring Boot 기반으로 JPA 설계, 트랜잭션 처리, 예외 관리를 직접 구현했고,
            레스토랑 예약 프로젝트에서는 DB Lock 기반 동시성 제어 로직을 설계해
            <strong style={{ color: '#fff' }}> 동시 예약 오류 0건</strong>을 달성했습니다.<br /><br />
            순수 Java MVC 구조 설계와 TCP/IP 소켓 통신 구현 경험을 통해 근거 있는 기술 선택을 중시하며,
            코드 리뷰와 컨벤션 정립에 적극 참여해 팀이 함께 관리할 수 있는 코드를 지향합니다.
          </p>
        </div>

        {/* 섹션 이동 버튼 */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {navItems.map(({ label, sub, target }) => (
            <button
              key={target}
              onClick={() => scrollTo(target)}
              style={{
                flex: '1 1 160px',
                padding: '18px 20px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: '#fff',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'
                e.currentTarget.style.background = 'rgba(59,130,246,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}
            >
              <div style={{ fontSize: '0.78em', color: '#3b82f6', marginBottom: '6px', fontWeight: '500' }}>
                {sub}
              </div>
              <div style={{ fontSize: '1em', fontWeight: 'bold' }}>
                {label} →
              </div>
            </button>
          ))}
        </div>

        {/* 링크 버튼들 */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              style={{
                display: 'inline-block',
                padding: '9px 22px',
                borderRadius: '7px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#ccc',
                textDecoration: 'none',
                fontSize: '0.88em',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Intro
