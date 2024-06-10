import "./Bonus.css";

export default function Bonus() {
  return (
    <>
      <div className="bonus-wrapper">
        <div className="bonus-offers">
          <p>Masové ingredience - 35,- Kč</p>
          <p>Zeleninové ingredience - 35,- Kč</p>
          <p>Sýrové ingredience - 35,- Kč</p>
        </div>
        <div className="bonus-images">
          <img
            src="../../../src/assets/bonus/meat.png"
            alt="meat"
            width={300}
            height={200}
          />
          <img
            src="../../../src/assets/bonus/vegetables.png"
            alt="vegetables"
            width={300}
            height={200}
          />
          <img
            src="../../../src/assets/bonus/cheese.png"
            alt="cheese"
            width={300}
            height={200}
          />
        </div>
      </div>
    </>
  );
}
