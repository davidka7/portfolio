import "../App.css";
import { useState } from "react";
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
function List() {
  const [carouselNum, setCarouselNum] = useState(1);
  const [carousel, setCarousel] = useState(
    "/portfolio/static/media/img1.ada559c5.png"
  );
  function changerCarousel(e) {
    setCarousel(e.target.value);
    setCarouselNum(e.target.name);
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
      <img src={carousel} className="exp1"></img>
      <div className="dots">
        <button
          value="/portfolio/static/media/img1.ada559c5.png"
          onClick={changerCarousel}
          name={1}
          className={`dot A${carouselNum}`}
        ></button>
        <button
          value="/portfolio/static/media/img2.94492b05.png"
          onClick={changerCarousel}
          className={`dot B${carouselNum}`}
          name={2}
        ></button>
        <button
          value="/portfolio/static/media/img3.eff2d3e9.png"
          onClick={changerCarousel}
          className={`dot C${carouselNum}`}
          name={3}
        ></button>
        <button
          value="/portfolio/static/media/img4.d76337df.png"
          onClick={changerCarousel}
          className={`dot D${carouselNum}`}
          name={4}
        ></button>
        <button
          value="/portfolio/static/media/img5.f25b9459.png"
          onClick={changerCarousel}
          className={`dot E${carouselNum}`}
          name={5}
        ></button>
        <button
          value="/portfolio/static/media/img6.ed766110.png"
          onClick={changerCarousel}
          className={`dot F${carouselNum}`}
          name={6}
        ></button>
        <button
          value="/portfolio/static/media/img7.f791da2b.png"
          onClick={changerCarousel}
          className={`dot G${carouselNum}`}
          name={7}
        ></button>
      </div>
      <div className="flex">
        <div id="contact">Contact</div>
      </div>{" "}
      <br />
      <a
        href="https://drive.google.com/file/d/1QwjBCBL4yiXPuR3JeUeVbqeaLGG6m8R5/view?usp=sharing"
        target="_blank"
        className="radi"
      >
        {" "}
        <img className="radi1" src={mail} alt="mail" />
        &nbsp; Mail
      </a>
      <a href="https://github.com/davidka7" target="_blank" className="radi">
        {" "}
        <img className="radi1" src={git} alt="github" />
        &nbsp; Github
      </a>
      <a
        href="https://www.linkedin.com/in/david-perekopskiy-1694971a0/"
        target="_blank"
        className="radi"
      >
        {" "}
        <img className="radi1" src={link} alt="linkedin" />
        &nbsp; Linkedin
      </a>
      <br /> <br />
    </div>
  );
}
export default List;
