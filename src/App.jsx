import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a href="#home" className="logo">
          Santhiya<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>

      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-left">

          <p className="hero-intro">
            <span className="line"></span>
            HELLO, I'M SANTHIYA
          </p>

          <h1>
            Frontend
            <br />
            <span>Developer.</span>
          </h1>

          <h2>
            React & WordPress Developer
          </h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly
            websites with clean code and creative interfaces.
          </p>


          {/* BUTTONS */}

          <div className="hero-buttons">

            <a
              href="#projects"
              className="main-button"
            >
              <span>View My Work</span>
              <span className="button-arrow">↗</span>
            </a>


            <a
              href="/SANTHIYA.pdf"
              className="outline-button resume-button"
            >
              <span>View Resume</span>
              <span>↗</span>
            </a>


            <a
              href="#contact"
              className="outline-button"
            >
              Contact Me
            </a>

          </div>


          {/* SOCIAL LINKS */}

          <div className="hero-social">

            <a
              href="https://github.com/SanthiyaJega567"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/santhiya7454"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>


        {/* HERO RIGHT */}

        <div className="hero-right">

          <div className="glow-circle"></div>


          <div className="hero-card">

            <div className="card-top">
              <span>01</span>
              <span>FRONTEND</span>
            </div>


            {/* PHOTO PLACEHOLDER */}

            <div className="profile-placeholder">
            <img src="/profile-photo.png" alt="Santhiya - Web Developer" />
            </div>


            <div className="card-bottom">
              <span>React</span>
              <span>JavaScript</span>
              <span>WordPress</span>
            </div>

          </div>


          <div className="floating-text">
            CREATIVE
            <br />
            DEVELOPER
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="section-heading">

          <p>01 — ABOUT</p>

          <h2>
            Building digital
            <br />
            experiences{" "}
            <span>with purpose.</span>
          </h2>

        </div>


        <div className="about-content">

          <p className="large-text">
            I'm a Computer Science Engineering graduate
            and Web Developer with hands-on experience
            building responsive websites and interactive
            web interfaces.
          </p>

          <p>
            I enjoy turning ideas into clean, functional and visually engaging websites.
             I have professional experience in WordPress development and hands-on experience
              with HTML, CSS, JavaScript and PHP.
             I am currently building projects with
              React and continuously developing my frontend development skills.
          </p>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-heading">

          <p>02 — SKILLS</p>

          <h2>
            Tools I use to
            <br />
            <span>build things.</span>
          </h2>

        </div>


        <div className="skills-grid">

          <div className="skill-card">
            <span>01</span>
            <h3>HTML5</h3>
            <p>Semantic & structured web pages</p>
          </div>


          <div className="skill-card">
            <span>02</span>
            <h3>CSS3</h3>
            <p>Responsive layouts & animations</p>
          </div>


          <div className="skill-card">
            <span>03</span>
            <h3>JavaScript</h3>
            <p>Interactive web functionality</p>
          </div>


          <div className="skill-card">
            <span>04</span>
            <h3>React.js</h3>
            <p>Component-based interfaces</p>
          </div>


          <div className="skill-card">
            <span>05</span>
            <h3>Bootstrap</h3>
            <p>Responsive UI development</p>
          </div>


          <div className="skill-card">
            <span>06</span>
            <h3>WordPress</h3>
            <p>Custom websites & theme work</p>
          </div>


          <div className="skill-card">
            <span>07</span>
            <h3>PHP</h3>
            <p>Backend customization</p>
          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section experience-section"
      >

        <div className="section-heading">

          <p>03 — EXPERIENCE</p>

          <h2>
            My professional
            <br />
            <span>journey.</span>
          </h2>

        </div>


        <div className="experience-card">

          <div className="experience-number">
            01
          </div>


          <div className="experience-details">

            <p className="experience-date">
              OCT 2025 — AUG 2026
            </p>

            <h3>
              WordPress Developer
            </h3>

            <h4>
              Crafola Solutions — Digital Marketing Agency
            </h4>

            <p>
              Developed and customized e-commerce,
              service-based and blog websites using
              WordPress, Elementor, HTML, CSS, JavaScript
              and PHP.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-heading">

          <p>04 — PROJECTS</p>

          <h2>
            Selected
            <br />
            <span>work.</span>
          </h2>

        </div>


        <div className="projects-grid">


          {/* TECHTUNE */}

          <article className="project-card">

            <div className="project-image project-one">

              <span>01</span>

              <div className="project-symbol">
                &lt;/&gt;
              </div>

            </div>


            <div className="project-info">

              <div>

                <p>STATIC WEBSITE</p>

                <h3>
                  TechTune
                </h3>

              </div>


              <p className="project-description">
                Responsive static website developed using
                HTML, CSS and Bootstrap with a
                mobile-friendly layout.
              </p>


              <div className="project-footer">

                <span>
                  HTML · CSS · Bootstrap
                </span>

                <a
                  href="https://github.com/SanthiyaJega567/Techtune-staticwebsite"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

              </div>

            </div>

          </article>


          {/* WOODORA */}

          <article className="project-card">

            <div className="project-image project-two">

              <span>02</span>

              <div className="project-symbol">
                WO
              </div>

            </div>


            <div className="project-info">

              <div>

                <p>FURNITURE WEBSITE</p>

                <h3>
                  Woodora
                </h3>

              </div>


              <p className="project-description">
                Responsive furniture website developed
                using HTML, CSS, Bootstrap and JavaScript
                with interactive elements.
              </p>


              <div className="project-footer">

                <span>
                  HTML · CSS · JS · Bootstrap
                </span>

                <a
                  href="https://github.com/SanthiyaJega567/woodora-dynamicwebsite"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

              </div>

            </div>

          </article>


          {/* PORTFOLIO */}

          <article className="project-card">

            <div className="project-image project-three">

              <span>03</span>

              <div className="project-symbol">
                R
              </div>

            </div>


            <div className="project-info">

              <div>

                <p>REACT PROJECT</p>

                <h3>
                  Personal Portfolio
                </h3>

              </div>


              <p className="project-description">
                Modern personal portfolio built with
                React, JavaScript and CSS to showcase
                my skills, experience and projects.
              </p>


              <div className="project-footer">

                <span>
                  React · JavaScript · CSS
                </span>

                <a href="#home">
                  In Progress ↗
                </a>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <p>
          05 — CONTACT
        </p>


        <h2>
          Have a project
          <br />
          <span>in mind?</span>
        </h2>


        <a
          href="mailto:santhiya7454@gmail.com"
          className="contact-button"
        >
          Let's Work Together
          <span>↗</span>
        </a>


        <div className="contact-details">

          <a href="mailto:santhiya7454@gmail.com">
            santhiya7454@gmail.com
          </a>

          <a href="tel:+918438085499">
            +91 84380 85499
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 Santhiya Jega
        </p>

        <p>
          Frontend Developer
        </p>

      </footer>

    </div>
  );
}

export default App;