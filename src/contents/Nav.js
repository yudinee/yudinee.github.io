import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: '학력 & 경험', target: 'class' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      height: '56px',
      background: scrolled ? 'rgba(28, 29, 38, 0.95)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
    }}>
      {/* 로고 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '1.05em',
          cursor: 'pointer',
          padding: 0,
          letterSpacing: '0.02em',
        }}
      >
        Yujin
      </button>

      {/* 섹션 링크 */}
      <div style={{ display: 'flex', gap: '32px' }}>
        {navItems.map(({ label, target }) => (
          <button
            key={target}
            onClick={() => scrollTo(target)}
            style={{
              background: 'none',
              border: 'none',
              color: '#aaa',
              fontSize: '0.88em',
              cursor: 'pointer',
              padding: 0,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Nav
