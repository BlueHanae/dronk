import React, { createElement, useState } from "react";
import "./Round2.scss";
import GameStart from "../GameStart/GameStart";

function Round2(props) {
  const players = props.players;
  const done = props.done;
  const [rangeValue, setRangeValue] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [nextRound, setNextRound] = useState(false);

  function handleRangeChange(event) {
    setRangeValue(event.target.value);
  }

  function handleAnswer(index) {
    const numberOfDrink = Math.abs(done - rangeValue);
    const playerDiv = document.getElementById(`player${index}`);
    playerDiv.innerHTML = "";
    const playerText = document.createElement("p");
    playerDiv.appendChild(playerText);
    if (numberOfDrink === 0) {
      const pNode = document.createTextNode(
        "Bravo crackito! Aucune gorgée, aucun gage!"
      );
      playerText.appendChild(pNode);
      setAnswered(true);
      setRangeValue(0);
    } else {
      const pNode = document.createTextNode(
        `Oups! tu t'es trompé de ${numberOfDrink}! Bois ${numberOfDrink} gorgée(s) ou fais choisir à tes amis ${numberOfDrink} gage(s) pour toi!`
      );
      playerText.appendChild(pNode);
      setAnswered(true);
      setRangeValue(0);
    }
  }

  function handleNextPlayer(index) {
    setAnswered(false);
    const divToMove = document.getElementById(`player${index}`);
    divToMove.classList.add("done");
    if (players.length === index + players.length) {
      setNextRound(true);
    }
  }

  return (
    <div>
      {nextRound ? (
        <GameStart players={players} />
      ) : (
        <div>
          {players.map((player, index) => (
            <div key={index} id={`player${index}`} className="player-card">
              <p>Donne le téléphone à {player.name}!</p>
              <p>{player.name},</p>
              <p>à ton avis, combien de joueurs l'ont déjà fait?</p>
              <p>{rangeValue}</p>
              <input
                type="range"
                value={rangeValue}
                min="0"
                max={players.length}
                onChange={handleRangeChange}
              />
              <button onClick={() => handleAnswer(index)}>Suite</button>
              {answered ? (
                <button onClick={() => handleNextPlayer(index)}>
                  Joueur suivant!
                </button>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Round2;
