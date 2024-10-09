import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./Navbar.css"; // Import the external CSS file

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('/');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    setActiveNav(window.location.pathname);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div>
      <div className="desktop-nav-wrapper">
        <div className="desktop-navigation">
          <div>
            <img src="/Images/nav-logo1.png" alt="Logo" className="logo" />
          </div>
          <div className="nav-links">
            <div>
              <a href="/" className={`nav-link ${activeNav === '/' ? 'active' : ''}`}>Home</a>
            </div>
            <div>
              <a href="/about" className={`nav-link ${activeNav === '/about' ? 'active' : ''}`}>About</a>
            </div>
            <div>
              <a href="/project" className={`nav-link ${activeNav === '/project' ? 'active' : ''}`}>Project</a>
            </div>
            <div>
              <a href="/experience" className={`nav-link ${activeNav === '/experience' ? 'active' : ''}`}>Experience</a>
            </div>
            <div>
              <a href="/contact" className={`nav-link ${activeNav === '/contact' ? 'active' : ''}`}>Contact</a>
            </div>
            <div>
              <a href="/resume" className="resume-btn">Resume</a>
            </div>
            <div className="dark-mode-toggle">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="toggle-btn"
            >
              {darkMode ? <MdLightMode className="mode"/> : <MdDarkMode className="text-[25px] dark:text-[#000000]" />}
            </button>
          </div>
          </div>
        
        </div>
      </div>
      <div className="mobile-nav-wrapper">
        <div className="mobile-navigation">
          {/* Mobile navigation goes here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
