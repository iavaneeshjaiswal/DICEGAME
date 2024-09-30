import "./game.css";
import Dicerole from "./Components/dice";
import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Game({ Visible }) {
  const diceFaces = [
    "dice_1.png",
    "dice_2.png",
    "dice_3.png",
    "dice_4.png",
    "dice_5.png",
    "dice_6.png",
  ];

  const [currentDice, setCurrentDice] = useState(diceFaces[0]);
  let [score, setScore] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [win, setWin] = useState("Click on the Dice To roll.");

  let userInput = 0;
  let finalValue;

  const changeScore = (gen, input) => {
    if (gen == input) {
      setScore(score + 1);
    } else {
      if (score != 0) {
        setScore(score - 1);
      }
    }
  };

  const notify = () => toast.error("You have not selected any number");

  const rollDice = () => {
    if (userInput != 0) {
      let rolls = 10;
      const interval = setInterval(() => {
        // Randomly show different dice faces during roll
        const randomFace = Math.floor(Math.random() * 6);
        setCurrentDice(diceFaces[randomFace]);

        rolls--;
        if (rolls === 0) {
          clearInterval(interval); // Stop the rolling effect

          // Final dice result
          const finalRoll = Math.floor(Math.random() * 6);
          setCurrentDice(diceFaces[finalRoll]);

          finalValue = finalRoll + 1;

          console.log(userInput, finalValue);
          changeScore(finalValue, userInput);
          userInput = 0;
        }
      }, 100); // Simulate rolling by changing face every 100ms
    } else {
      notify();
    }
  };

  const checkWinner = () => {};

  const triggerRules = () => {
    let rules = document.querySelector(".rules");
    setIsHidden(!isHidden);
    if (isHidden) {
      rules.style.display = "none";
    } else {
      rules.style.display = "flex";
    }
  };

  const reset = () => {
    setScore(0);
    userInput = 0;
    Visible(z);
  };

  return (
    <div className="Gamemain">
      <div className="upperBox">
        <div className="score">
          <h1>{score}</h1>
          <h3>Total Score</h3>
        </div>
        <div className="slcbox">
          <div className="selector">
            <button
              href="#"
              onClick={(e) => {
                userInput = 1;
              }}
            >
              1
            </button>
            <button
              href="#"
              onClick={(e) => {
                userInput = 2;
              }}
            >
              2
            </button>
            <button
              href="#"
              onClick={(e) => {
                userInput = 3;
              }}
            >
              3
            </button>
            <button
              href="#"
              onClick={(e) => {
                userInput = 4;
              }}
            >
              4
            </button>
            <button
              href="#"
              onClick={(e) => {
                userInput = 5;
              }}
            >
              5
            </button>
            <button
              href="#"
              onClick={(e) => {
                userInput = 6;
              }}
            >
              6
            </button>
          </div>
          <h3>Select Number</h3>
        </div>
      </div>
      <div className="diceBox">
        <Dicerole currentDice={currentDice} func={rollDice} />
        <h3>{win}</h3>
      </div>
      <div className="button">
        <button onClick={reset}>Reset Score</button>
        <button onClick={triggerRules}>
          {!isHidden ? "Show Rules" : "Hide Rules"}
        </button>
      </div>
      <div className="rules">
        <h4>How to play dice game</h4>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            After click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </li>
          <li>If you get wrong guess then 2 point will be dedcuted </li>
        </ul>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
}

export default Game;
