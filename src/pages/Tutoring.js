// src/pages/Tutoring.js
import '../App.css';

export default function Tutoring() {
  return (
    <div className="tutoring-page">
      <div className="tutoring-header">
        <h1>Tutoring Services</h1>
        <p>Helping students master math, physics, and C++.</p>
      </div>

      <div className="tutoring-intro">
        <p>
          As a Computer Engineering student at UTD with a 3.95 GPA, I offer personalized tutoring that focuses on deep understanding and confidence-building.
          Whether you're stuck on a problem set or preparing for finals — I can help.
        </p>
      </div>

      <div className="tutoring-cards">
        <div className="tutoring-card">
          <h3>📐 Math</h3>
          <ul>
            <li>Pre-Algebra to Calculus II</li>
            <li>Step-by-step problem solving</li>
            <li>Homework + Test Prep</li>
          </ul>
        </div>

        <div className="tutoring-card">
          <h3>⚙️ Physics</h3>
          <ul>
            <li>Kinematics & Newtonian Mechanics</li>
            <li>Visual learning & real-world examples</li>
            <li>Concept reinforcement</li>
          </ul>
        </div>

        <div className="tutoring-card">
          <h3>💻 C++ Programming</h3>
          <ul>
            <li>Beginner to OOP</li>
            <li>Code reviews + project guidance</li>
            <li>Interactive examples</li>
          </ul>
        </div>
      </div>

      <div className="tutoring-details">
        <h3>📍 Location</h3>
        <p>School season: Online</p>
        <p>Summer/Winter Break: Online or in-person near Cedar Park</p>
        <h3>💲 Rates</h3>
        <p>$25/hour</p>
        <h3>💸 Pay via Cash App</h3>
        <p>
        Click to pay: <a href="https://cash.app/$RafaelFAmador" target="_blank" rel="noreferrer">$Cash App</a>
        </p>
        <section className="section contact"></section>
        <p>For more questions feel free to contact me.</p>
        <p>view my contact page</p>
      </div>
    </div>
  );
}
