import "../App.css";
import { useState } from "react";
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
  const [myNav, setmyNav] = useState("myNav");
  const openNav = () => {
    setmyNav("myNav1");
  };
  const closeNav = () => {
    setmyNav("myNav");
  };
  return (
    <header>
      <nav className="opened">
        {" "}
        <ul>
          <li>
            <div className="software">David Perekopskiy</div>
          </li>

          <li>
            <a onClick={abouter}>Awesome </a>
          </li>

          <li>
            <a onClick={servicer}>Hobbies</a>
          </li>

          <li>
            <a onClick={sermoner}>Projects</a>
          </li>
        </ul>
      </nav>
      <nav className="hidden">
        {" "}
        <ul>
          <li>
            <div className="software">David Perekopskiy</div>
          </li>
          <li>
            <span className="spanner" onClick={openNav}>
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
              <a onClick={abouter}>Awesome </a>
            </li>

            <li>
              <a onClick={servicer}>Hobbies</a>
            </li>

            <li>
              <a onClick={sermoner}>Projects</a>
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
