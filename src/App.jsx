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
          <a href="#client-work">Client Work</a>
          <a href="#training">Training</a>
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
            Web Developer & WordPress Developer
          </h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly
            websites with clean code and creative interfaces.
          </p>


          {/* BUTTONS */}

          <div className="hero-buttons">

            <a
              href="#client Work"
              className="main-button"
            >
              <span>View My Work</span>
              <span className="button-arrow">↗</span>
            </a>


          <a 
 href={`${import.meta.env.BASE_URL}SANTHIYA (1).pdf`}
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
  <img
    src={`${import.meta.env.BASE_URL}profile-photo.png`}
    alt="Santhiya - Web Developer"
    style={{
      width: "190px",
      height: "190px",
      objectFit: "cover",
      borderRadius: "50%",
      display: "block"
    }}
  />
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
            <h3>WordPress</h3>
            <p>Custom websites & theme work</p>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>WooCommerce</h3>
            <p>E-commerce & product setup</p>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>Elementor</h3>
            <p>Page building & responsive layouts</p>
          </div>

          <div className="skill-card">
            <span>04</span>
            <h3>HTML5</h3>
            <p>Semantic & structured web pages</p>
          </div>

          <div className="skill-card">
            <span>05</span>
            <h3>CSS3</h3>
            <p>Responsive layouts & styling</p>
          </div>

          <div className="skill-card">
            <span>06</span>
            <h3>JavaScript</h3>
            <p>Interactive web functionality</p>
          </div>

          <div className="skill-card">
            <span>07</span>
            <h3>PHP</h3>
            <p>Backend & WordPress customization</p>
          </div>

          <div className="skill-card">
            <span>08</span>
            <h3>Bootstrap</h3>
            <p>Responsive UI development</p>
          </div>

          <div className="skill-card">
            <span>09</span>
            <h3>React.js</h3>
            <p>Component-based interfaces</p>
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
              SEP 2025 — SEP 2026 · 1 YEAR
            </p>

            <h3>
              WordPress Developer
            </h3>

            <h4>
              Crafola Solutions — Digital Marketing Agency
            </h4>

            <p>
              Independently developed and customized 16 client websites
              across e-commerce, franchise and corporate/business sectors
              using WordPress, Elementor, WooCommerce, HTML, CSS,
              JavaScript and PHP.
            </p>

            <ul className="experience-list">
              <li>Built responsive WordPress websites based on client requirements.</li>
              <li>Worked on WooCommerce product setup, product information sections and e-commerce pages.</li>
              <li>Customized themes, plugins and website components using CSS, JavaScript and PHP.</li>
              <li>Worked on responsive layouts, content updates, troubleshooting and front-end fixes.</li>
              <li>Handled basic website performance and SEO-related improvements.</li>
            </ul>

          </div>

        </div>

      </section>


      {/* ================= CLIENT WORK ================= */}

      <section
        id="client-work"
        className="section client-work-section"
      >

        <div className="section-heading">
          <p>04 — CLIENT WORK</p>
          <h2>
            Websites I
            <br />
            <span>worked on.</span>
          </h2>
        </div>

        <p className="client-work-intro">
          Professional WordPress work completed during my previous role,
          covering e-commerce, franchise and corporate websites.
        </p>

        <div className="client-category">
          <div className="client-category-heading">
            <span>01</span>
            <h3>E-Commerce / WooCommerce</h3>
          </div>

          <div className="client-grid">
            <a className="client-card" href="https://starsnithi.com/" target="_blank" rel="noopener noreferrer">
              <span>01</span><h4>Stars Nithi</h4><p>WordPress / WooCommerce website</p><strong>Live Website ↗</strong>
            </a>
            <a className="client-card" href="https://madhifoods.in/" target="_blank" rel="noopener noreferrer">
              <span>02</span><h4>Madhi Foods</h4><p>WordPress / WooCommerce website</p><strong>Live Website ↗</strong>
            </a>
             <a className="client-card" href="https://misaboutique.com/" target="_blank" rel="noopener noreferrer">
              <span>03</span><h4>Misaboutique</h4><p>WordPress / WooCommerce website</p><strong>Live Website ↗</strong>
            </a>
            <a className="client-card" href="https://amberhour.in/" target="_blank" rel="noopener noreferrer">
              <span>04</span><h4>Amberhour</h4><p>WordPress / WooCommerce website</p><strong>Live Website ↗</strong>
            </a>
            <a className="client-card" href="https://hemakaivannam.com/" target="_blank" rel="noopener noreferrer">
              <span>05</span><h4>Hema Kaivannam</h4><p>WordPress / WooCommerce website</p><strong>Live Website ↗</strong>
            </a>
            <a className="client-card" href="https://shop.hemakaivannam.com/" target="_blank" rel="noopener noreferrer">
              <span>06</span><h4>Shop Hema Kaivannam</h4><p>WordPress / WooCommerce website</p><strong>Live Website ↗</strong>
            </a>
            <a className="client-card" href="https://sreepanchamis.in/" target="_blank" rel="noopener noreferrer">
              <span>07</span><h4>Sree Panchamis</h4><p>Products + product information section</p><strong>Live Website ↗</strong>
            </a>
            <a className="client-card" href="https://panchamiveda.com/" target="_blank" rel="noopener noreferrer">
              <span>08</span><h4>Panchami Veda</h4><p>Products + product information section</p><strong>Live Website ↗</strong>
            </a>
          </div>
        </div>

        <div className="client-category">
          <div className="client-category-heading">
            <span>02</span>
            <h3>Franchise Websites</h3>
          </div>

          <div className="client-grid">
            <a className="client-card" href="https://timepausefranchise.com/" target="_blank" rel="noopener noreferrer"><span>01</span><h4>Time Pause</h4><p>Franchise website</p><strong>Live Website ↗</strong></a>
            <a className="client-card" href="http://grillsandkebabsfranchise.com/" target="_blank" rel="noopener noreferrer"><span>02</span><h4>Grills &amp; Kebabs</h4><p>Franchise website</p><strong>Live Website ↗</strong></a>
            <a className="client-card" href="https://secretwondersfranchise.com/" target="_blank" rel="noopener noreferrer"><span>03</span><h4>Secret Wonders</h4><p>Franchise website</p><strong>Live Website ↗</strong></a>
            <a className="client-card" href="https://teaglassfranchise.com/" target="_blank" rel="noopener noreferrer"><span>04</span><h4>Tea Glass</h4><p>Franchise website</p><strong>Live Website ↗</strong></a>
            <a className="client-card" href="https://woowwafflesfranchise.com/" target="_blank" rel="noopener noreferrer"><span>05</span><h4>Woow Waffles</h4><p>Franchise website</p><strong>Live Website ↗</strong></a>
            <a className="client-card" href="https://tribalmomosfranchise.com/" target="_blank" rel="noopener noreferrer"><span>06</span><h4>Tribal Momos</h4><p>Franchise website</p><strong>Live Website ↗</strong></a>
            <a className="client-card" href="https://idlydosasambarfranchise.com/" target="_blank" rel="noopener noreferrer"><span>07</span><h4>Idly Dosa Sambar</h4><p>Franchise website</p><strong>Live Website ↗</strong></a>
          </div>
        </div>

        <div className="client-category">
          <div className="client-category-heading">
            <span>03</span>
            <h3>Corporate / Business</h3>
          </div>

          <div className="client-grid single-client">
            <a className="client-card" href="https://vighagroups.com/" target="_blank" rel="noopener noreferrer">
              <span>01</span><h4>Vigha Groups</h4><p>Corporate / business website</p><strong>Live Website ↗</strong>
            </a>
          </div>
        </div>

      </section>


      {/* ================= TRAINING ================= */}

      <section
        id="training"
        className="section training-section"
      >

        <div className="section-heading">
          <p>05 — TRAINING &amp; INTERNSHIP</p>
          <h2>
            Learning and
            <br />
            <span>growth.</span>
          </h2>
        </div>

        <div className="training-grid">

          <article className="training-card">
            <div className="training-card-top">
              <span className="training-number">01</span>
              <span className="training-label">INTERNSHIP · 1 MONTH</span>
            </div>

            <div className="training-card-content">
              <h3>Web Development Internship</h3>
              <p>
                Gained hands-on experience in HTML, CSS, JavaScript and Bootstrap,
                and developed basic responsive web pages while learning practical
                web development workflows.
              </p>
            </div>
          </article>

          <article className="training-card">
            <div className="training-card-top">
              <span className="training-number">02</span>
              <span className="training-label">WEB DEVELOPMENT COURSE</span>
            </div>

            <div className="training-card-content">
              <h3>Dream High Institute and Technology</h3>
              <p className="training-date">June 2025 — August 2025</p>
              <p>
                Completed hands-on training in HTML, CSS, JavaScript, Bootstrap,
                jQuery, React, PHP, SQL and WordPress, with practical projects
                focused on responsive web development.
              </p>
            </div>
          </article>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-heading">

          <p>06 — PROJECTS</p>

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
  href="https://santhiyajega567.github.io/Techtune-staticwebsite/" 
  target="_blank" 
  rel="noopener noreferrer" 
>
  Live Demo ↗
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
  href="https://santhiyajega567.github.io/woodora-dynamicwebsite/"
  target="_blank"
  rel="noopener noreferrer"
>
  Live Demo ↗
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
          07 — CONTACT
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
          Web Developer & WordPress Developer
        </p>

      </footer>

    </div>
  );
}

export default App;