import "./App.css";
import Home from "./home";
import Game from "./Game";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const start = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && <Home Visible={start} />}
      {!isVisible && <Game Visible={start} />}
    </>
  );
}

export default App;
