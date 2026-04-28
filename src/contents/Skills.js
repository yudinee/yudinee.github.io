import { StyleDivision } from '../styles/StyleCommon'

const categories = [
    {
        label: 'Backend',
        color: '#3b82f6',
        skills: ['Java', 'Spring Boot', 'Spring Framework', 'JPA', 'MyBatis', 'Maven', 'Gradle'],
    },
    {
        label: 'Frontend',
        color: '#a78bfa',
        skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'JSP'],
    },
    {
        label: 'Database',
        color: '#34d399',
        skills: ['MySQL'],
    },
    {
        label: 'Infrastructure & Tools',
        color: '#fb923c',
        skills: ['Docker', 'Git', 'GitHub', 'Jira', 'WebSocket', 'TCP/IP Socket'],
    },
]

const Skills = () => {
    return (
        <div>
            <StyleDivision>이만큼 노력하고 있어요</StyleDivision>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                {categories.map(({ label, color, skills }) => (
                    <div key={label}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                            <span style={{
                                display: 'inline-block',
                                width: '4px',
                                height: '18px',
                                borderRadius: '2px',
                                background: color,
                                flexShrink: 0,
                            }} />
                            <span style={{ color: '#fff', fontSize: '0.95em', fontWeight: 'bold', letterSpacing: '0.04em' }}>
                                {label}
                            </span>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {skills.map(skill => (
                                <span key={skill} style={{
                                    padding: '6px 14px',
                                    borderRadius: '6px',
                                    border: `1px solid ${color}40`,
                                    background: `${color}12`,
                                    color: '#ddd',
                                    fontSize: '0.88em',
                                    letterSpacing: '0.01em',
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
