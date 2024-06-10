import "./Header.css";

const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const headerP = document.querySelector("p");

let clicks = 0;

function hamburgerChange() {
  clicks++;
  console.log(clicks);
  if(clicks % 2 == 1) {
    // TODO
  } else if(clicks % 2 == 0) {
    // TODO
  }
}

export default function Header() {
  return (
    <>
      <header id="header">
        <div className="header-responsivity">
          <div className="header-first">
            <h1 className="header-mainTitle">Pizza Pepino</h1>
          </div>
          <div className="header-second">
            <label
              htmlFor="nav_check"
              className="hamburger"
              id="hamburger"
              onClick={hamburgerChange}
            >
              <div></div>
              <div></div>
              <div></div>
            </label>
          </div>
        </div>
        <p className="header-p" id="header-last">
          <a href="#contact" className="header-style">
            KONTAKT
          </a>
        </p>
        <p className="header-p">
          <a href="#delivery" className="header-style">
            ROZVOZ
          </a>
        </p>
        <p className="header-p">
          <a href="#pizza" className="header-style">
            MENU
          </a>
        </p>
        <p className="header-p">
          <a href="#about" className="header-style">
            O NÁS
          </a>
        </p>
      </header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
