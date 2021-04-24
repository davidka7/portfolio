import "../App.css";
function Header() {
  return (
    <header>
      <nav>
        {" "}
        <ul>
          {/* {location.pathname === "/home" ? ( */}
          <li>
            <a onClick={abouter}>About </a>
          </li>
          {/* ) : (
          <div></div>
        )} */}
          {/* {location.pathname === "/home" ? ( */}
          <li>
            <a onClick={servicer}>Service</a>
          </li>
          {/* ) : (
          <div></div>
        )} */}
          {/* {location.pathname === "/home" ? ( */}
          <li>
            <a onClick={sermoner}>Sermons</a>
          </li>
          {/* ) : (
          <div></div>
        )} */}

          {/* <li>
          <span className="spanner" onClick={openNav}>
            &#9776; open
          </span>
        </li> */}
        </ul>
        {/* <div id={`${myNav}`} className="overlay">
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
   
      </div> */}
      </nav>
    </header>
  );
}
export default Header;
