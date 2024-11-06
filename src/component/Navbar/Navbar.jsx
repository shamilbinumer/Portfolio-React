import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('/');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [scrollPosition, setScrollPosition] = useState(0);

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

  // Handle scroll event to change navbar background color
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`desktop-nav-wrapper ${scrollPosition > 50 ? 'scrolled' : ''}`}>
        <div className={`desktop-navigation ${scrollPosition > 50 ? 'scrolled' : ''}`}>
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
              <a className="resume-btn">Resume</a>
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
      <div className="social-icons">
        <a href="https://github.com/shamilbinumer"> 
          <div className="icon-wrapper"><FaGithub className="icon" /></div>
        </a>
        <a href="https://www.linkedin.com/in/mohammed-shamil-496361267/">  
          <div className="icon-wrapper"><FaLinkedinIn className="icon" /></div>
        </a>
        <a href=""> 
          <div className="icon-wrapper"><FaGithub className="icon" /></div>
        </a>
        <div className="vl"></div>
      </div>
    </div>
  );
};

export default Navbar;
