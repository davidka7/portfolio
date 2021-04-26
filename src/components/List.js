import "../App.css";
import git from "./tabs/git.png";
import link from "./tabs/link.png";
import mail from "./tabs/mail.png";
import is from "./group/is.png";
import camp from "./group/camp.jpg";
function List() {
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
      <div className="flex">About</div>{" "}
      <div className="flexx">
        <div id="awesome">
          <br />
          While in school, I spent time building my coding abilities, starting
          from ruby on rails and working on React javascript, I came to be able
          to adapt and grasp any language I put my mind to. I have worked on my
          own time and at my current internship, with redux, hooks, typescript,
          Mongo DB, writing JSON files, stripe, and other tools. I am focused
          and diligent when managing workloads and prioritizing tasks to meet
          deadlines. I thrive in environments where I am able to make a direct
          impact, utilizing my abilities in complex problem-solving to find
          solutions and achieve results. I also love to learn what I don't know.
          As for my background, I grew up with a single mom, a strong woman, who
          raised me well, but we had no English language(we are Russian), so it
          was quite difficult for us at first. But I was fast to grasp the
          English language and learned a lot. I loved building since childhood
          and that's partially the reason I got into coding. I'm not sure about
          the program I used but from day one when I was able to write some code
          and see instant results, the step by step process of my code on the
          console, I grew a passion for coding. My most valuable skills are my
          desire to learn and adapt to new environments and my knowledge of the
          Russian and Ukrainian language(if ever needed). I have a grasp in
          different technologies and more is said about it and my internship on
          my resume. <br />
          Sincerely, david perekopskiy
        </div>
        <br />
      </div>
      <div className="flex">
        <div id="hobbies">Hobbies</div>
      </div>{" "}
      <div className="flexxx">
        <div class="card">
          <img src={camp} alt="Avatar" style={{ width: "100%" }} />
          <div class="container">
            <h4>
              <b>i68 Post</b>
            </h4>
            <p>
              At a local church, in charge of the media team, working with
              camera, video design, and other media, as well as teaching other
              people. hands on experience with tech
            </p>
          </div>
        </div>
        <div class="card">
          <img src={is} alt="Avatar" style={{ width: "100%" }} />
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
      </div>
      <div className="flex">
        <div id="projects">Projects</div>
      </div>
      <div className="flexx">lol</div>
      <div className="flex">
        <div id="experience">experience</div>
      </div>{" "}
      <div className="exp"></div>
      <br />
      <div className="flex">
        <div id="contact">contact</div>
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
