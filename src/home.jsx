import "./home.css";

function Home({ Visible }) {
  return (
    <div className="main">
      <div className="img-1"></div>
      <div className="menu">
        <h1>Dice Game</h1>
        <button id="play-btn" onClick={Visible}>
          {" "}
          Play Now
        </button>
      </div>
    </div>
  );
}

export default Home;
