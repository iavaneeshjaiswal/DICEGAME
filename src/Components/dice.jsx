import "./dice.css";

function Dicerole({ currentDice, func }) {
  return (
    <div className="dice">
      <div
        className="diceImg"
        style={{
          backgroundImage: `url(src/assets/images/dices/${currentDice})`,
        }}
        onClick={func}
      ></div>
    </div>
  );
}

export default Dicerole;
