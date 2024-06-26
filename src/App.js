import React, { useState } from "react";
import "./App.css"; // Ensure this CSS file contains the styles mentioned above

const App = () => {
  const [activeTab, setActiveTab] = useState("skills");
  

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  

  return (
    <div>
      <nav className="navbar">
        <div className="container">
        <a href="#header"><img src="images/logo100.png" className="logo" alt="Logo" /></a>
          <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div id="header">
        <div className="container">
          <div className="header-text">
            <p>Programmer</p>
            <h1>
              Hi, I'm <span>Jesson</span> <br />
              From Butuan, Philippines
            </h1>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="images/jessonaw.jpg" alt="Profile" />
            </div>
            <div className="about-col-2">
              <h1 className="subtitle">About Me</h1>
              <p>
                Hello, I'm Jesson Maurice B. Antiporda from Butuan City, currently pursuing 
                a Bachelor of Science in Computer Science at Caraga State University and set 
                to graduate soon. I am seeking an internship or part-time opportunity to apply 
                and further enhance my programming skills.
              </p>

              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                  onClick={() => opentab("skills")}
                >
                  Technical Skills
                </p>
                <p
                  className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                  onClick={() => opentab("experience")}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                  onClick={() => opentab("education")}
                >
                  Education
                </p>
              </div>
              <div
                className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`}
                id="skills"
              >
                <ul>
                  <li><span>C, Java, JavaScript, PostgreSQL, Python</span><br />Programming Languages</li>
                  <li><span>Express, Vue, Angular, Nuxt</span><br />Frameworks</li>
                  <li><span>React</span><br />Libraries</li>
                  <li><span> Git, Postman, Vite</span><br />Developer Tools</li>
                  <li><span>HTML, CSS</span><br />Others</li>
                </ul>
              </div>
              <div
                className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`}
                id="experience"
              >
                <ul>
                  <li><span>No Experience Yet</span><br />Hopefully, you will be the first.</li>
                </ul>
              </div>
              <div
                className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`}
                id="education"
              >
                <ul>
                  <li>
                    <span>Bachelor of Science in Computer Science (2021 - Present)</span><br />
                    Caraga State University, Amapayon, Butuan City, 8600
                  </li>

                  <li>
                    <span> Accountancy, Business and Management (2018 - 2020)</span><br />
                    Father Saturnino Urios University, San Francisco St., Butuan City, 8600
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div id="portfolio">
        <div className="container">
          <h1 className="subtitle">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src="images/work1.jpg" alt="Work 1" />
              <div className="layer">
                <h3>To-do List Application</h3>
                <p>
                  The app that can list your todos.
                  Open it in web.
                </p>
                <p>•	Developed using HTML, CSS, and Vue.js as an assignment for one of our subjects.</p>
                <p> •	Utilized Vite for optimized build tooling and development workflow.</p>
                <p>•	Deployed the application using Vercel for efficient hosting and continuous deployment.</p>

                <a href="https://vue-todo-list-blue.vercel.app/"><i className="fa-solid fa-link"></i></a>
              </div>
            </div>
            <div className="work">
              <img src="images/work2.jpg" alt="Work 2" />
              <div className="layer">
                <h3>Philippine Tax Calculator</h3>
                <p>
                  The app calculates your net pay and taxes.
                  Open it in web.
                </p>
                <p>• Developed using HTML, CSS, and React.js for my personal project.</p>
                <p> •	Utilized Vite for optimized build tooling and development workflow.</p>
                <p>•	Deployed the application using Vercel for efficient hosting and continuous deployment. </p>

                <a href="https://tax-calculator-neon.vercel.app/"><i className="fa-solid fa-link"></i></a>
              </div>
            </div>

            <div className="work">
              <img src="images/work3.png" alt="Work 2" />
              <div className="layer">
                <h3>GWA Calculator</h3>
                <p>
                  The app calculates your General Weighted Average (GWA).
                  Open it in web.
                </p>
                <p>• Developed using HTML, CSS, and React.js for my personal project.</p>
                <p> •	Utilized Vite for optimized build tooling and development workflow.</p>
                <p>•	Deployed the application using Vercel for efficient hosting and continuous deployment. </p>

                <a href="https://gwa-calculator-liard.vercel.app/"><i className="fa-solid fa-link"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          
            <div className="contact-left">
              <h1 className="subtitle">Contact Me</h1>
              <p>
             <i className="fa-solid fa-paper-plane"></i>jessonmaurice.antiporda@gmail.com
              </p>
              <p><i className="fa-solid fa-phone"></i>09353606427</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/jessonmaurice.antiporda/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/jesson-maurice-antiporda-bb5617278/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <a
                href="images/RESUME(IT).pdf"
                download
                className="btn btn2"
              >
                Download CV
              </a>
            </div>
    
        </div>
        
      </div>
    </div>
  );
};

export default App;
