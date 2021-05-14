import "../App.css";
import { useState, useEffect } from "react";
import git from "./tabs/git.png";
import link from "./tabs/link.png";
import mail from "./tabs/mail.png";
import is from "./group/is.png";
import tennis from "./group/tennis.png";
import camp from "./group/camp.jpg";
import i68 from "../i68.gif";
import planny from "../planny.gif";
import map from "../map.gif";

import cap from "../cap.gif";
import img1 from "./newimg/img1.png";
import left from "./arrow/left.png";
import right from "./arrow/right.png";
import img2 from "./newimg/img2.png";
import img3 from "./newimg/img3.png";
import img4 from "./newimg/img4.png";
import img5 from "./newimg/img5.png";
import img6 from "./newimg/img6.png";
import img7 from "./newimg/img7.png";
function List() {
  useEffect(() => {
    setCarousel(img7);
  }, []);
  const [carouselNum, setCarouselNum] = useState(7);
  const [carousel, setCarousel] = useState("");
  function changerCarousel(e) {
    setCarousel(e.target.value);
    setCarouselNum(e.target.name);
  }
  function changerMinus() {
    if (carouselNum == 1) {
    } else {
      if (carouselNum - 1 == 1) {
        setCarousel(img1);
      } else if (carouselNum - 1 == 2) {
        setCarousel(img2);
      } else if (carouselNum - 1 == 3) {
        setCarousel(img3);
      } else if (carouselNum - 1 == 4) {
        setCarousel(img4);
      } else if (carouselNum - 1 == 5) {
        setCarousel(img5);
      } else if (carouselNum - 1 == 6) {
        setCarousel(img6);
      } else if (carouselNum - 1 == 7) {
        setCarousel(img7);
      }
      setCarouselNum(carouselNum - 1);
    }
  }
  function changerAdd() {
    if (carouselNum == 7) {
    } else {
      if (carouselNum + 1 == 1) {
        setCarousel(img1);
      } else if (carouselNum + 1 == 2) {
        setCarousel(img2);
      } else if (carouselNum + 1 == 3) {
        setCarousel(img3);
      } else if (carouselNum + 1 == 4) {
        setCarousel(img4);
      } else if (carouselNum + 1 == 5) {
        setCarousel(img5);
      } else if (carouselNum + 1 == 6) {
        setCarousel(img6);
      } else if (carouselNum + 1 == 7) {
        setCarousel(img7);
      }
      setCarouselNum(carouselNum + 1);
    }
  }
  return (
    <div className="cover">
      <div className="laptop">
        <br />

        <div className="left">
          <br /> <br />
          <div className="dark"> The More I </div>
          <div className="back">Code, </div>
          <br />
          <div className="dark"> The More I </div>
          <div className="back">LOVE IT</div>
        </div>
      </div>
      <div id="awesome" className="flex">
        About
      </div>{" "}
      <div className="flexx">
        <div>
          <br />
          While in school, I spent time building my coding abilities, starting
          from ruby on rails and onto React in javascript. I came to be able to
          adapt and grasp any language I put my mind to. I have also worked on
          my own time and at my current internship, with redux, hooks,
          typescript, Mongo DB, writing JSON files, stripe, and other tools. I
          am focused and diligent when managing workloads and prioritizing tasks
          to meet deadlines. I thrive in environments where I am able to make a
          direct impact, utilizing my abilities in complex problem-solving to
          find solutions and achieve results.
          <br /> I loved building since childhood and that's partially the
          reason I got into coding. <br />
          Sincerely, david perekopskiy
        </div>
        <br />
      </div>
      <div className="flex">
        <div id="hobbies">Personal Projects</div>
      </div>{" "}
      <br />
      <div className="flexxx">
        <div class="card">
          <img src={is} alt="Avatar" style={{ width: "100%" }} />
          <div class="container">
            <h4>
              <b>i68 Post</b>
            </h4>
            <p>
              At a local church, in charge of the media team, working with
              camera, video design, other tech, as well as teaching people.
            </p>
          </div>
        </div>
        <div class="card">
          <img src={camp} alt="Avatar" style={{ width: "100%" }} />
          <div class="container">
            <h4>
              <b>Kids Camp</b>
            </h4>
            <p>
              Serve as a leader for youth and kids camps in the summer.
              Participate in Teen gatherings, and other events
            </p>
          </div>
        </div>
        <div class="card">
          <img src={tennis} alt="Avatar" style={{ width: "100%" }} />
          <div class="container">
            <h4>
              <b>Personal Hobbies</b>
            </h4>
            <p>
              I love building DIYs, traveling, hiking, playing every sport out
              there, making music and meeting new people.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="flex">
        <div id="projects">Professional Projects</div>
      </div>
      <br />
      <div className="flexxx">
        <div class="cards">
          <a href="https://planyboat-knd.web.app/" target="_blank">
            <img
              src={planny}
              alt="Avatar"
              className="projects"
              // style="width:100%"
            />
          </a>
          <div class="containers">
            <h4>
              <b>Planny Boat</b>
            </h4>
            <p>Minni Trello Version</p>
          </div>
        </div>
        <div class="cards">
          <a href="https://davidka7.github.io/i68youth/" target="_blank">
            <img
              src={i68}
              alt="Avatar"
              // style="width:100%"
              className="projects"
            />{" "}
          </a>
          <div class="containers">
            <h4>
              <b>i68 youth</b>
            </h4>
            <p>Website I am building for a church</p>
          </div>
        </div>

        <div class="cards">
          <img
            src={map}
            alt="Avatar"
            // style="width:100%"
            className="projects"
          />
          <div class="containers">
            <h4>
              <b>Map Searcher</b>
            </h4>
            <p>Reference a Saved Location with the Google maps api</p>
          </div>
        </div>
        <div class="cards">
          <a href="https://github.com/davidka7/Project-list" target="_blank">
            <img
              src={cap}
              alt="Avatar"
              // style="width:100%"
              className="projects"
            />
          </a>
          <div class="containers">
            <h4>
              <b>Other Projects</b>
            </h4>
            <p>Github Projects</p>
          </div>
        </div>
      </div>
      <br />
      <div className="flex">
        <div id="experience">Experience</div>
      </div>{" "}
      <br />
      <div className="positioner">
        <img src={carousel} className="exp1" />

        <img onClick={changerMinus} src={left} className="lefta" />
        <img onClick={changerAdd} src={right} className="righta" />
      </div>
      <div className="dots">
        <button
          value={img1}
          onClick={changerCarousel}
          name={1}
          className={`dot A${carouselNum}`}
        ></button>
        <button
          value={img2}
          onClick={changerCarousel}
          className={`dot B${carouselNum}`}
          name={2}
        ></button>
        <button
          value={img3}
          onClick={changerCarousel}
          className={`dot C${carouselNum}`}
          name={3}
        ></button>
        <button
          value={img4}
          onClick={changerCarousel}
          className={`dot D${carouselNum}`}
          name={4}
        ></button>
        <button
          value={img5}
          onClick={changerCarousel}
          className={`dot E${carouselNum}`}
          name={5}
        ></button>
        <button
          value={img6}
          onClick={changerCarousel}
          className={`dot F${carouselNum}`}
          name={6}
        ></button>
        <button
          value={img7}
          onClick={changerCarousel}
          className={`dot G${carouselNum}`}
          name={7}
        ></button>
      </div>
      <div className="flex">
        <div id="contact">Contact</div>
      </div>{" "}
      <br />
      <div className="spread">
        <a
          href="https://drive.google.com/file/d/1QwjBCBL4yiXPuR3JeUeVbqeaLGG6m8R5/view?usp=sharing"
          target="_blank"
          className="radi"
        >
          {" "}
          <img className="radi1" src={mail} alt="mail" />
        </a>
        <a href="https://github.com/davidka7" target="_blank" className="radi">
          {" "}
          <img className="radi1" src={git} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/david-perekopskiy-1694971a0/"
          target="_blank"
          className="radi"
        >
          {" "}
          <img className="radi1" src={link} alt="linkedin" />
        </a>
      </div>
      <br /> <br />
    </div>
  );
}
export default List;
