import "./Footer.css";
import Iframe from "react-iframe";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-maps">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2539.592958904463!2d15.175833000000003!3d50.467304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470eaeedf9f34825%3A0x1e61d5a3d0b405e1!2sBoleslavsk%C3%A1%20128%2C%20507%2043%20Sobotka%2C%20%C4%8Cesko!5e0!3m2!1scs!2sus!4v1717327700335!5m2!1scs!2sus"
              width="99.8%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </div>
          <div className="footer-contacts">
            <h3 id="contact">Kontakt:</h3>
            <p>Telefonní číslo: 776 772 766</p>
            <h3>Provozní doba:</h3>
            <p>Pondělí - Sobota 10.00 - 20.00 hod.</p>
            <p>Neděle 12.00 - 20.00 hod.</p>
            <h3 id="delivery">Rozvoz: </h3>
            <p>Po Sobotce - zdarma</p>
            <p>Po okolí do 5 km - zdarma</p>
            <p>Po okolí 5 - 8 km - 50,- Kč</p>
            <p>Pondělí - Pátek od 16 hodin, Víkend od 12 hodin. </p>
          </div>
        </div>
      </footer>
      <div className="footer-authors">
        <h1>Ondřej Fíla, Matěj Konšel</h1>
      </div>
    </>
  );
}
