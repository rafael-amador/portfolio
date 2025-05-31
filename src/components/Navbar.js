// src/components/Navbar.js
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ hideNav }) {
  const location = useLocation();

  return (
    <nav className={`navbar ${hideNav ? 'hide' : ''}`} style={{ top: hideNav ? '-100px' : '0' }}>
      <div className="logo-group">
        <Link to="/" className={`logo ${location.pathname === '/' ? 'active' : ''}`}>Main Page</Link>
        <Link to="/tutoring" className={`logo ${location.pathname === '/tutoring' ? 'active' : ''}`}>Tutoring</Link>
        <Link to="/contact" className={`logo ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </div>
    </nav>
  );
}
