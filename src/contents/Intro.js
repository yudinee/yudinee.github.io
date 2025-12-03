import theme from "../styles/Theme";
import { StyleUpdateAt } from "../styles/StyleIntro"
import profileImage from "../assets/css/images/KakaoTalk_Photo_2025-12-03-15-24-02.jpeg";

const Intro = () => {
  const moment = require('moment')
  const now = moment()
  const updated = moment('20240603','YYYYMMDD')
  const diff = now.diff(updated, 'days');

  return (
    <div>
      <section id="banner" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="content" style={{ display: 'flex', alignItems: 'center', gap: '80px', maxWidth: '1400px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={profileImage} alt="Profile" style={{ width: '350px', height: '450px', objectFit: 'cover', marginBottom: '20px' }} />
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8em', marginBottom: '10px', color: 'yellow' }}>Yujin Seong</h3>
              <p style={{ margin: '5px 0', color: '#ccc' }}>Seoul, South Korea</p>
              <p style={{ margin: '5px 0', color: '#ccc' }}>Tel. 010-2182-0457</p>
              <p style={{ margin: '5px 0', color: '#ccc' }}>E. apdkfldbwls@naver.com</p>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
            <header style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '3em', marginBottom: '30px', textAlign: 'left' }}><code>About Me</code></h2>
            </header>
            <div style={{ fontSize: '1.1em', lineHeight: '1.8', color: '#ddd', textAlign: 'left' }}>
              <p style={{ marginBottom: '20px', fontWeight: 'bold', textAlign: 'left' }}>
                안정적이고 확장 가능한 백엔드 서비스를 만들며 팀과 함께 성장하는 개발자입니다 👩🏻‍💻
              </p>
              <p style={{ marginBottom: '15px', textAlign: 'left' }}>
                Spring Boot 기반 서비스에서 JPA 설계, 트랜잭션 처리, 예외 관리 경험을 쌓았고, 레스토랑 예약 프로젝트에서는 DB Lock 기반 동시성 문제를 해결하며 안정성을 검증했습니다.
              </p>
              <p style={{ textAlign: 'left' }}>
                코드 리뷰와 컨벤션 정립 과정에 적극 참여하며 협업 역량을 강화했고, 꾸준한 학습과 실습을 통해 <strong>구조를 이해하고 더 나은 방향을 고민하는 개발자</strong>로 성장하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
