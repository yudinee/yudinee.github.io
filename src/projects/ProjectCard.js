import { useState, useEffect } from 'react'

const ProjectCard = ({ icon, title, subtitle, period, team, tech, myRole, github, children }) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = `${scrollbarWidth}px`
        } else {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }
        return () => {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }
    }, [open])

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') setOpen(false) }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    return (
        <>
            <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '14px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '2em' }}>{icon}</span>
                    <span style={{ color: '#999', fontSize: '0.82em', textAlign: 'right', lineHeight: '1.5' }}>
                        {period}<br />{team}
                    </span>
                </div>

                <h3 style={{ margin: 0, fontSize: '1.5em', color: '#fff', fontWeight: 'bold' }}>
                    {title}
                </h3>

                <p style={{ margin: 0, color: '#bbb', fontSize: '0.9em', lineHeight: '1.6' }}>
                    {subtitle}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {tech.map((t, i) => (
                        <span key={i} style={{
                            background: 'rgba(255,255,255,0.07)',
                            border: '1px solid rgba(255,255,255,0.14)',
                            borderRadius: '5px',
                            padding: '3px 9px',
                            fontSize: '0.78em',
                            color: '#ccc',
                        }}>{t}</span>
                    ))}
                </div>

                <p style={{ margin: 0, color: '#888', fontSize: '0.85em' }}>{myRole}</p>

                <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: 'inline-block',
                            background: '#2563eb',
                            color: '#fff',
                            padding: '9px 22px',
                            borderRadius: '7px',
                            textDecoration: 'none',
                            fontSize: '0.88em',
                            fontWeight: 'bold',
                        }}
                    >
                        GitHub
                    </a>
                    <button
                        onClick={() => setOpen(true)}
                        style={{
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.3)',
                            color: '#fff',
                            padding: '9px 22px',
                            borderRadius: '7px',
                            cursor: 'pointer',
                            fontSize: '0.88em',
                        }}
                    >
                        자세히 보기
                    </button>
                </div>
            </div>

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px',
                    }}
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            background: '#1c1d26',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '16px',
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: '88vh',
                            overflowY: 'auto',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* 고정 헤더 */}
                        <div style={{
                            position: 'sticky',
                            top: 0,
                            background: '#1c1d26',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            padding: '20px 28px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            zIndex: 1,
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.5em' }}>{icon}</span>
                                <div>
                                    <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1em' }}>{title}</div>
                                    <div style={{ color: '#777', fontSize: '0.78em', marginTop: '2px' }}>
                                        {period} · {team}
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                style={{
                                    background: 'rgba(255,255,255,0.08)',
                                    border: 'none',
                                    color: '#aaa',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    fontSize: '1.1em',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}
                            >
                                ✕
                            </button>
                        </div>

                        {/* 본문 */}
                        <div style={{ padding: '28px' }}>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectCard
