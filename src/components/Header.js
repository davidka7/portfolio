import "../App.css";
function Header() {
  return (
    <div className="fixed">
      <ul className="third-header">☰lol</ul>
      <ul className="first-header">
        <div> David Perekopskiy</div> <div>FullStack SE</div>
      </ul>
      <ul className="second-header">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#hobbies">Hobbies</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#achievments">Achievments</a>
        </li>
        <li>
          <a href="#goals">Goals</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1QwjBCBL4yiXPuR3JeUeVbqeaLGG6m8R5/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
