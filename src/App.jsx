import { useEffect, useRef, useState } from 'react';
import './App.css'; 
import profilePic from './sash.png';
import rileyPic from './riley.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('ABOUT');
  const [darkMode, setDarkMode] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [workTab, setWorkTab] = useState('WEB3');
  const [hintPeek, setHintPeek] = useState(false);
  const hintTimers = useRef([]);

  const clearHint = () => {
    hintTimers.current.forEach(clearTimeout);
    hintTimers.current = [];
    setHintPeek(false);
  };

  // À chaque ouverture de WORK : le titre passe à Web2 puis revient, pour montrer qu'il est cliquable
  useEffect(() => {
    if (activeTab !== 'WORK') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    hintTimers.current = [
      setTimeout(() => setHintPeek(true), 1200),
      setTimeout(() => setHintPeek(false), 1200 + 450 + 800),
    ];
    return clearHint;
  }, [activeTab]);

  const toggleWorkTab = () => {
    clearHint();
    setWorkTab(workTab === 'WEB3' ? 'WEB2' : 'WEB3');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'ABOUT':
        return (
          <div className="fade-in">
            <h3 className="section-title">Philosophy</h3>
            <p className="intro-text">
              I build communities, ship campaigns, and drive growth. From scaling Web3 projects to 20k+ members to launching product programs that generate thousands of engagements.
            </p>
            <p className="intro-text">
              My approach: <strong>talk to users, execute fast, measure everything</strong>. I bridge the gap between technical teams and users, turning complex DeFi products into stories people actually care about.
            </p>
            <div className="highlight-box">
              <span className="status-dot">🟢</span> Open to work in <strong>Marketing, Community & Growth</strong>
            </div>
          </div>
        );

      case 'WORK':
        return (
          <div className="fade-in">
            <h3 className="section-title">
              <button
                className="title-switch"
                onClick={toggleWorkTab}
                aria-label={workTab === 'WEB3' ? 'Web3 Missions, switch to Web2 Experience' : 'Web2 Experience, switch to Web3 Missions'}
              >
                Web
                <span className="roll roll-digit">
                  <span className={`roll-track ${(workTab === 'WEB2') !== hintPeek ? 'rolled' : ''}`}>
                    <span>3</span><span>2</span>
                  </span>
                </span>
                <span className="roll roll-word">
                  <span className={`roll-track ${(workTab === 'WEB2') !== hintPeek ? 'rolled' : ''}`}>
                    <span>Missions</span><span>Experience</span>
                  </span>
                </span>
              </button>
            </h3>
            {workTab === 'WEB3' ? (
            <ul className="work-list">
              <li className="work-item">
                <span className="work-date">2025</span>
                <div className="work-details">
                  <strong>Marketing / Community Lead @ Pulse</strong>
                  <p>Drove 5k+ wearable sales. Recruited a global team and launched a Beta Program with structured feedback & generated 2.5k+ participations via a gamified sports challenge campaign.</p>
                </div>
              </li>
              <li className="work-item">
                <span className="work-date">2022</span>
                <div className="work-details">
                  <strong>Marketing / Community Manager @ Neon Labs</strong>
                  <p>Scaled community to 20k+ members. Collaborated closely with internal engineers and developer users. Launched a weekly podcast and conducted competitive analysis to support business development.</p>
                </div>
              </li>
            </ul>
            ) : (
            <ul className="work-list">
              <li className="work-item">
                <span className="work-date">2016</span>
                <div className="work-details">
                  <strong>Youth Coach @ Juventus Academy</strong>
                  <p>Former D1 reserve player turned coach. 6 years coaching at Juventus Academy in a bilingual FR/EN setting: adapting my communication to every profile, building trust and keeping groups engaged.</p>
                </div>
              </li>
              <li className="work-item">
                <span className="work-date">2014</span>
                <div className="work-details">
                  <strong>Real Estate Investor & Owner-Manager</strong>
                  <p>Owning and self-managing a rental property for 10+ years: tenants, budget, maintenance and admin. A daily school of autonomy, rigor and hands-on problem solving.</p>
                </div>
              </li>
            </ul>
            )}
          </div>
        );

      case 'CONTACT':
        return (
          <div className="fade-in">
            <h3 className="section-title">Let's Connect</h3>
            <p className="intro-text">
              The best way to reach me is via Twitter (X) or Discord.
            </p>
            
            <div className="contact-grid">
              {/* Remplace les # par tes vrais liens */}
              <a href="https://x.com/sashgmi" target="_blank" rel="noopener noreferrer" className="social-btn">
                <span>X (Twitter)</span>
                <span className="arrow">↗</span>
              </a>
              
              <a href="https://t.me/sashgmi" target="_blank" rel="noopener noreferrer" className="social-btn">
                <span>Telegram</span>
                <span className="arrow">↗</span>
              </a>

              <a href="https://discord.com/users/954808542643232818" target="_blank" rel="noopener noreferrer" className="social-btn">
                <span>Discord</span>
                <span className="arrow">↗</span>
              </a>

              <a href="https://www.linkedin.com/in/sasha-beck/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <span>LinkedIn</span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">

        {/* THEME TOGGLE */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          <span className={`icon sun ${!darkMode ? 'active' : ''}`}>☀️</span>
          <span className={`icon moon ${darkMode ? 'active' : ''}`}>🌙</span>
        </button>

        {/* HEADER */}
        <header className="header">
          <div className={`avatar-frame ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
            <div className="avatar-inner">
              <img className="avatar-front" src={profilePic} alt="Sash Profile" />
              <img className="avatar-back" src={rileyPic} alt="Riley" />
            </div>
          </div>
          <div className="identity">
            <h1>Sasha B.</h1>
            <p>Web3 Growth & Marketing</p>
          </div>
        </header>

        {/* NAVIGATION TABS */}
        <nav className="nav-row">
          {['ABOUT', 'WORK', 'CONTACT'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn-small ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* MAIN CONTENT AREA */}
        <main className="main-box">
          {renderContent()}
        </main>

        {/* FOOTER */}
        <footer>
          <p>
            <a href="https://x.com/sashgmi" target="_blank" rel="noopener noreferrer">Made by Sash.</a>
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;