import React, { useState, useEffect } from 'react';

import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissor from './icons/Scissor';

import Choices from './components/Choices';
import GameState from './components/GameState';
import WinsLosses from './components/WinsLosses';
import './style.css';

// <WinsLosses state={gameState} userChoice={userChoice} computerChoice={computerChoice}/>

const choices = [
  { id: 1, name: 'rock', component: Rock, losesTo: 2 },
  { id: 2, name: 'paper', component: Paper, losesTo: 3 },
  { id: 3, name: 'scissors', component: Scissor, losesTo: 1 },
];

const App = () => {
  const [wins, setWins] = useState(0);
  const [losses, setlosses] = useState(0);
  const [draws, setDraws] = useState(0);

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    restartGame();
  }, []);

  const restartGame = () => {
    setGameState(null);
    setComputerChoice(null);

    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const handleUserChoice = (choice) => {
    const chosenChoice = choices.find((c) => c.id === choice);
    setUserChoice(chosenChoice);

    if (chosenChoice.losesTo === computerChoice.id) {
      setlosses((l) => l + 1);
      setGameState('lose');
    } else if (computerChoice.losesTo === chosenChoice.id) {
      setWins((l) => l + 1);
      setGameState('win');
    } else if (computerChoice.id === chosenChoice.id) {
      setGameState('draw');
      setDraws((l) => l + 1);
    }
  };

  return (
    <div className="app">
      <div className="info">
        <h2>Rock🪨Paper📄Scissor✂️</h2>
        <WinsLosses wins={wins} losses={losses} draws={draws} />
      </div>
      {gameState && (
        <GameState
          state={gameState}
          userChoice={userChoice.component()}
          computerChoice={computerChoice.component()}
          clicked={restartGame}
        />
      )}
      <Choices handleUserChoice={handleUserChoice} />
    </div>
  );
};

export default App;
