import "../App.css";
function Header() {
  return (
    <div>
      <ul className="third-header">Open</ul>
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
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
