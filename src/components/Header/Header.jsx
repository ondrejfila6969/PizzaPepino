import "./Header.css";

export default function Header() {
  return (
    <>
          <header id="header">
        <h1 className="header-mainTitle">Pizza Pepino</h1>
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
