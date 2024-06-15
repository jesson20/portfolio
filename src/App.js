import React, { useState } from "react";
import "./App.css"; // Make sure to include your CSS for active-link and active-tab classes
import { utils, writeFile } from "xlsx";

const App = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    Message: ''
  });

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new workbook and worksheet
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([formData]);

    // Append worksheet to workbook
    utils.book_append_sheet(wb, ws, "Form Submissions");

    // Write the workbook to an Excel file
    writeFile(wb, "form-submissions.xlsx");

    // Clear the form fields
    setFormData({ name: "", email: "", message: "" });
    alert("Message saved to Excel!");
  };

  return (
    <div>
      <div id="header">
        <div className="container">
          <nav>
            <img src="images/logo100.png" className="logo" alt="Logo" />
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="header-text">
            <p>Computer Science Student</p>
            <h1>
              Hi, I'm <span>Jesson</span> <br />
              From Caraga States University
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
                "Hello, I'm Jesson Maurice B. Antiporda from Butuan City,
                currently pursuing a Bachelor of Science in Computer Science at
                Caraga State University. I am seeking an internship or part-time
                opportunity to apply and enhance my skills in software/web
                development. I have a solid foundation in programming languages
                such as C, Java, JavaScript, Python, and PostgreSQL, with
                experience in frameworks like Express, Vue, Angular, and Nuxt. I
                have developed several projects, including a To-Do List, a
                Philippine Tax Calculator, and a Portfolio web application, all
                deployed using Vercel. My technical skills are complemented by
                proficiency in tools like Git, Postman, and Vite, and strong
                communication abilities in English.
              </p>

              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                  onClick={() => opentab("skills")}
                >
                  Skills
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
                  <li><span>C</span><br />Basic</li>
                  <li><span>C#</span><br />Basic</li>
                  <li><span>Java</span><br />Basic</li>
                  <li><span>HTML/CSS</span><br />Basic</li>
                  <li><span>JavaScript</span><br />Basic</li>
                </ul>
              </div>
              <div
                className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`}
                id="experience"
              >
                <ul>
                  <li><span>No Experience Yet</span><br />Still Looking</li>
                </ul>
              </div>
              <div
                className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`}
                id="education"
              >
                <ul>
                  <li>
                    <span>Bachelor of Science in Computer Science</span><br />
                    Caraga State University
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services">
        <div className="container">
          <h1 className="subtitle">My Services</h1>
          <div className="service-list">
            <div>
              <i className="fa-solid fa-code"></i>
              <h2>Web Design</h2>
              <p>
                wqeqweqweqweqweqwe qeqweqweqweqwewq qwewqeqweqweqwe
                qwewqeqweqweqweeqwewq qewwqewqeqw
              </p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className="fa-solid fa-crop"></i>
              <h2>Web Design</h2>
              <p>
                wqeqweqweqweqweqwe qeqweqweqweqwewq qwewqeqweqweqwe
                qwewqeqweqweqweeqwewq qewwqewqeqw
              </p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <i className="fa-brands fa-app-store"></i>
              <h2>Web Design</h2>
              <p>
                wqeqweqweqweqweqwe qeqweqweqweqwewq qwewqeqweqweqwe
                qwewqeqweqweqweeqwewq qewwqewqeqw
              </p>
              <a href="#">Learn more</a>
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
                <a href="https://tax-calculator-neon.vercel.app/"><i className="fa-solid fa-link"></i></a>
              </div>
            </div>
            
          </div>
          <a href="#" className="btn">See more</a>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="subtitle">Contact Me</h1>
              <p>
                <i className="fa-solid fa-paper-plane"></i>jessonmaurice.antiporda@gmail.com
              </p>
              <p><i className="fa-solid fa-phone"></i>09353606427</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/AntipordaJesson?mibextid=ZbWKwL">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://twitter.com/JessonAntiporda">
                  <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="https://www.instagram.com/jessonantiporda/">
                  <i className="fa-brands fa-instagram"></i>
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
            <div className="contact-right">
            <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" class ="btn btn2">Submit</button>
      </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright c Jesson. A programmer <i className="fa-solid fa-heart"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;