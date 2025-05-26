import './App.css';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [barOrder, setBarOrder] = useState([]);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const indices = [...Array(7).keys()];
    const shuffled = indices.sort(() => 0.5 - Math.random());
    setBarOrder(shuffled);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHideNav(currentY > prevScrollY && currentY > 100);
      setPrevScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-logo">R.A</div>
        <div className="loader-ring"></div>
      </div>
    );
  }

  return (
    <div className={`App intro-animate`}>
      <div className="intro-bars">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="bar"
            style={{ animationDelay: `${barOrder.indexOf(i) * 0.1}s` }}
          ></div>
        ))}
      </div>

      <nav className={`navbar ${hideNav ? 'hide' : ''}`} style={{ top: hideNav ? '-100px' : '0' }}>
        <div className="logo">rafael amador</div>
        <div className="social-links">
          <a href="https://github.com/rafael-amador" target="_blank" rel="noreferrer" className="github">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/rafael-amador-068019320" target="_blank" rel="noreferrer" className="linkedin">
            <FaLinkedin size={20} />
          </a>
          <a href="https://instagram.com/rafael.amador24" target="_blank" rel="noreferrer" className="instagram">
            <FaInstagram size={20} />
          </a>
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
            <span className="slider"></span>
          </label>
        </div>
      </nav>

      <section className="hero">
        <h1>Hi, I'm Rafael</h1>
        <p>Embedded Systems & Software Developer</p>
        <p>Computer Engineering student @ UTD</p>
      </section>

      <section className="section about">
        <h2>About Me</h2>
        <p>
          I'm a hands-on builder who bridges the gap between hardware and software. I enjoy creating responsive applications, embedded systems, and smart devices using React, Arduino, C++, and Python.
        </p>
      </section>

      <section className="section projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Smart Calculator</h3>
            <p>React-based calculator that interprets typed math and renders clean answers.</p>
            <span className="badge">React</span> <span className="badge">JavaScript</span>
          </div>
          <div className="card">
            <h3>Robotic Arm Controller</h3>
            <p>Arduino + servo setup with planned PCB and UI controller.</p>
            <span className="badge">Arduino</span> <span className="badge">C++</span>
          </div>
          <div className="card">
            <h3>Bank Manager</h3>
            <p>C++ OOP system for managing user accounts and transactions.</p>
            <span className="badge">C++</span> <span className="badge">File I/O</span>
          </div>
        </div>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p>Email: youremail@example.com</p>
      </section>
    </div>
  );
}

export default App;
