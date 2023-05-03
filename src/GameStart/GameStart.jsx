import React, { useState } from "react";

import questionsData from "../data/questions";
import Round2 from "../Round2/Round2";

import "./GameStart.scss";

function GameStart(props) {
  const questions = questionsData;
  const players = props.players;
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [done, setDone] = useState(0);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [displayNextQuestion, setDisplayNextQuestion] = useState(true);
  const [displayAllPlayers, setDisplayAllPlayers] = useState(false);
  const [nextRound, setNextRound] = useState(false);

  function handleNextRound() {
    setNextRound(true);
  }

  function randomQuestion() {
    const randomNumberGenerated = Math.floor(Math.random() * questions.length);
    const isItAlreadyAsked = askedQuestions.includes(randomNumberGenerated);
    if (!isItAlreadyAsked) {
      setDone(0);
      setDisplayNextQuestion(false);
      setDisplayAllPlayers(true);
      setQuestion(questions[randomNumberGenerated]);
      setAskedQuestions((prevAskedQuestion) => [
        ...prevAskedQuestion,
        randomNumberGenerated,
      ]);
    } else {
      randomQuestion();
    }
  }

  function handleDone(number, index) {
    setDone(done + number);
    const divToMove = document.getElementById(`player${index}`);
    divToMove.classList.add("done");
    if (players.length === index + players.length) {
      setTimeout(() => setDisplayAnswer(true), 1000);
    }
  }

  return (
    <div>
      {nextRound ? (
        <Round2 players={players} done={done} />
      ) : (
        <div>
          {displayAnswer ? (
            <button onClick={handleNextRound}>Deuxième round!</button>
          ) : (
            ""
          )}
          {displayNextQuestion ? (
            <button onClick={randomQuestion} id="questionButton">
              Prochaine question
            </button>
          ) : (
            ""
          )}
          <div
            className={
              displayAllPlayers ? "players-list" : "players-list undisplay"
            }
          >
            {players.map((player, index) => (
              <div key={index} id={`player${index}`} className="player-card">
                <p>Donne le téléphone à {player.name}!</p>
                <p>{player.name},</p>
                <p>{question}</p>
                <button onClick={() => handleDone(1, index)}>J'ai déjà</button>
                <button onClick={() => handleDone(0, index)}>
                  Je n'ai jamais
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GameStart;
