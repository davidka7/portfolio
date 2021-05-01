import "../App.css";
import { useState } from "react";
import contacts from "./project/contact.png";
import experiences from "./project/experience.png";
import hobbies from "./project/hobbies.png";
import person from "./project/person.png";
import projects from "./project/projects.png";
import resumes from "./project/resume.png";
function Header() {
  const abouter = () => {
    document.getElementById("awesome").scrollIntoView();
  };
  const servicer = () => {
    document.getElementById("hobbies").scrollIntoView();
  };
  const sermoner = () => {
    document.getElementById("projects").scrollIntoView();
  };
  const experience = () => {
    document.getElementById("experience").scrollIntoView();
  };
  const contact = () => {
    document.getElementById("contact").scrollIntoView();
  };

  const [myNav, setmyNav] = useState("myNav");
  const openNav = () => {
    setmyNav("myNav1");
  };
  const closeNav = () => {
    setmyNav("myNav");
  };
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-20vh";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <header id="navbar">
      <nav className="opened">
        {" "}
        <ul>
          <li>
            <a className="remove">David Perekopskiy</a>
          </li>

          <li>
            <a onClick={abouter}>
              {" "}
              <img className="reduce" src={person} alt="" />
              About{" "}
            </a>
          </li>

          <li>
            <a onClick={servicer}>
              <img className="reduce" src={hobbies} alt="" />
              Hobbies
            </a>
          </li>

          <li>
            <a onClick={sermoner}>
              <img className="reduce" src={projects} alt="" />
              Projects
            </a>
          </li>
          <li>
            <a onClick={experience}>
              <img className="reduce" src={experiences} alt="" />
              Experience
            </a>
          </li>

          <li>
            <a onClick={contact}>
              <img className="reduce" src={contacts} alt="" />
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1QwjBCBL4yiXPuR3JeUeVbqeaLGG6m8R5/view?usp=sharing"
              target="_blank"
            >
              <img className="reduce" src={resumes} alt="" />
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <nav className="hidden">
        {" "}
        <ul>
          <li>
            <div className="fonty remove">David Perekopskiy</div>
          </li>
          <li>
            <span className="fonty spanner" onClick={openNav}>
              &#9776; Menu
            </span>
          </li>
        </ul>
        <div id={`${myNav}`} className="overlay">
          <a className="closebtn" onClick={closeNav}>
            &times;
          </a>
        </div>
        <div id={`${myNav}`} className="overlay">
          <a className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div onClick={closeNav} className="overlay-content">
            <li>
              <div className="software">
                David <br />
                Perekopskiy
              </div>
            </li>

            <li>
              <a onClick={abouter}> About </a>
            </li>

            <li>
              <a onClick={servicer}>Hobbies</a>
            </li>

            <li>
              <a onClick={sermoner}>Projects</a>
            </li>
            <li>
              <a onClick={experience}>Experience</a>
            </li>

            <li>
              <a onClick={contact}>Contact</a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1QwjBCBL4yiXPuR3JeUeVbqeaLGG6m8R5/view?usp=sharing"
                target="_blank"
              >
                <img src={resumes} alt="" />
                Resume
              </a>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
