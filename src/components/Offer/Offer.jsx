import "./Offer.css";

import Margherita1 from "../../../src/assets/pizza/Margherita.png";
import Ham2 from "../../../src/assets/pizza/Ham.png";
import Bacon3 from "../../../src/assets/pizza/Bacon.png";
import Salami4 from "../../../src/assets/pizza/Salami.png";
import Champignons5 from "../../../src/assets/pizza/Champignons.png";
import Vegetariana6 from "../../../src/assets/pizza/Vegetariana.png";
import Funghi7 from "../../../src/assets/pizza/Funghi.png";
import Hawai8 from "../../../src/assets/pizza/Hawai.png";
import Diavola9 from "../../../src/assets/pizza/Diavola.png";
import QuattroFormagi10 from "../../../src/assets/pizza/QuattroFormagi.png";
import Pollo11 from "../../../src/assets/pizza/Polo.png";
import Tonno12 from "../../../src/assets/pizza/Tonno.png";
import Capricciosa13 from "../../../src/assets/pizza/Capricciosa.png";

export class Pizza {
  constructor(number, name, ingrediences, price) {
    this.number = number;
    this.name = name;
    this.ingrediences = ingrediences;
    this.price = price;
    this.imageSize = {
      width: 300,
      height: 200,
    };
  }
}

const paths = [
  Margherita1,
  Ham2,
  Bacon3,
  Salami4,
  Champignons5,
  Vegetariana6,
  Funghi7,
  Hawai8,
  Diavola9,
  QuattroFormagi10,
  Pollo11,
  Tonno12,
  Capricciosa13,
];

export const Margherita = new Pizza(
  1,
  "Margherita",
  "tomatový základ, čerstvé rajče, mozzarella, bazalka",
  180
);
export const Ham = new Pizza(
  2,
  "Šunková",
  "tomatový základ, sýr, šunka, bazalka, oregáno",
  180
);
export const Bacon = new Pizza(
  3,
  "Slaninová",
  "tomatový základ, sýr, slanina, cibule, bazalka, oregáno",
  180
);
export const Salami = new Pizza(
  4,
  "Salámová",
  "tomatový základ, sýr, salám, oregáno",
  180
);
export const Champignons = new Pizza(
  5,
  "Žampionová",
  "tomatový základ, sýr, žampiony",
  180
);
export const Vegetariana = new Pizza(
  6,
  "Vegetariana",
  "tomatový základ, sýr, zelenina, oregáno",
  180
);
export const Funghi = new Pizza(
  7,
  "Funghi",
  "tomatový základ, sýr, žampióny, slanina, modrý sýr, oregáno",
  180
);
export const Hawai = new Pizza(
  8,
  "Hawai",
  "tomatový základ, sýr, šunka, ananas, oregáno",
  180
);
export const Diavola = new Pizza(
  9,
  "Diavola",
  "pik. salám, olivy, feferonky, parmazán, olivový olej, oregáno",
  180
);
export const QuattroFormagi = new Pizza(
  10,
  "Quattro Formagi",
  "smetanový základ, 4 druhy sýrů",
  180
);
export const Pollo = new Pizza(
  11,
  "Pollo",
  "smetanový základ, sýr, kuřecí maso, špenát, brokolice",
  180
);
export const Tonno = new Pizza(
  12,
  "Tonno",
  "tomatový základ, sýr, tuňák, červená cibule, oregáno",
  180
);
export const Capricciosa = new Pizza(
  13,
  "Capricciosa",
  "tomatový základ, sýr, houby, šunka, černé olivy",
  180
);

export default function Offer(props) {
  return (
    <>
        <div className="offer-wrapper">
          <img
            src={paths[props.instance.number - 1]}
            width={props.instance.imageSize.width}
            height={props.instance.imageSize.height}
            alt="backgroundImg"
          />
          <h2>
            {props.instance.number}. pizza: {props.instance.name}
          </h2>
          <h3>Ingredience: {props.instance.ingrediences}</h3>
          <h3>Cena: {props.instance.price},- Kč</h3>
        </div>
    </>
  );
}
