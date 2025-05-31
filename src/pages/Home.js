
function HomePageContent({ darkMode, setDarkMode }) {
  return (
    <>
      <section className="hero">
        <h1>Hi, I'm Rafael</h1>
        <p>Embedded Systems & Software Developer</p>
        <p>Computer Engineering student</p>
        <section className="dark-mode-toggle-anchor">
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => setDarkMode(!darkMode)}
              checked={darkMode}
              aria-label="Toggle dark mode"
            />
            <span className="slider"></span>
          </label>
        </section>
      </section>

      <section className="section about">
        <h2>About Me</h2>
        <p> I'm a hands-on builder who bridges the gap between hardware and software. </p>
        <p> I enjoy creating responsive applications, embedded systems, and smart devices using Arduino, C++, and Python. </p>
      </section>

      <section className="section projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="card">
            <h3>Arduino Games</h3>
            <p>Multiple high functioning well known reaction style games recreated using arduino.</p>
            <span className="badge">C++</span> <span className="badge">Arduino</span>
          </div>
          <div className="card">
            <h3>Robotic Arm Controller</h3>
            <p>Arduino + servo setup with planned PCB and controller adaptive.</p>
            <span className="badge">C++</span> <span className="badge">Arduino</span><span className="badge">Arduino IDE</span>
          </div>
          <div className="card">
            <h3>Bank Manager</h3>
            <p>C++ OOP system for managing user accounts and transactions.</p>
            <span className="badge">C++</span> <span className="badge">File I/O</span> <span className="badge">OOP</span>
          </div>
        </div>
      </section>

      <section className="section education">
        <h2>Education</h2>
        <p>University of Texas at Dallas; Graduating class of 2028; current GPA: 3.95/4.00</p>
      </section>
    </>
  );
}
export default HomePageContent;
