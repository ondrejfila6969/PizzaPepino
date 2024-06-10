// CSS
import "./Home.css";

// Components
import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import Offer from "../../components/Offer/Offer";
import Bonus from "../../components/Bonus/Bonus";
import Other from "../../components/Other/Other";
import Footer from "../../components/Footer/Footer";

// Instances
import {
  Margherita,
  Ham,
  Bacon,
  Salami,
  Champignons,
  Vegetariana,
  Funghi,
  Hawai,
  Diavola,
  QuattroFormagi,
  Pollo,
  Tonno,
  Capricciosa,
} from "../../components/Offer/Offer";

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <h1 className="home-offer-title" id="pizza">Naše Pizzy</h1>
      <div className="home-pizza-offer">
        <div className="home-center">
          <Offer instance={Margherita} />
          <Offer instance={Ham} />
          <Offer instance={Bacon} />
          <Offer instance={Salami} />
          <Offer instance={Champignons} />
          <Offer instance={Vegetariana} />
          <Offer instance={Funghi} />
          <Offer instance={Hawai} />
          <Offer instance={Diavola} />
          <Offer instance={QuattroFormagi} />
          <Offer instance={Pollo} />
          <Offer instance={Tonno} />
          <Offer instance={Capricciosa} />
        </div>
      </div>
      <h1 className="home-bonus-title">Přísady na pizzu navíc</h1>
      <Bonus />
      <h1 className="home-other-title">Další možnosti objednání</h1>
      <Other />
      <Footer />
    </>
  );
}
