import "./Other.css";

export default function Other() {
  return (
    <>
      <div className="other-wrapper">
        <div className="other-offers">
          <p>Půlená pizza dle Vašeho přání - 190,- Kč</p>
          <p>1/4 pizzy - 45,- Kč</p>
          <p>Krabice na pizzu - 15,- Kč</p>
        </div>
        <div className="other-images">
          <img
            src="../../../src/assets/bonus/half.png"
            alt="half"
            width={300}
            height={200}
          />
          <img
            src="../../../src/assets/bonus/quater.png"
            alt="quater"
            width={300}
            height={200}
          />
          <img
            src="../../../src/assets/bonus/box.png"
            alt="box"
            width={300}
            height={200}
          />
        </div>
      </div>
    </>
  );
}
