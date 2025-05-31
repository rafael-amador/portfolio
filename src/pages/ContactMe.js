// src/pages/ContactMe.js
import '../App.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>You can find me on the following platforms:</p>

      <div className="social-links contact-icons">
        <a href="https://github.com/rafael-amador" target="_blank" rel="noreferrer" className="github">
          <FaGithub size={28} />
        </a>
        <a href="https://linkedin.com/in/rafael-amador-068019320" target="_blank" rel="noreferrer" className="linkedin">
          <FaLinkedin size={28} />
        </a>
        <a href="https://instagram.com/rafael.amador24" target="_blank" rel="noreferrer" className="instagram">
          <FaInstagram size={28} />
        </a>
      </div>
      <section className="section contact">
        <p>Email: <a href="mailto:Rafam2406@gmail.com">Rafam2406@gmail.com</a></p>
      </section>
    </div>
  );
}
