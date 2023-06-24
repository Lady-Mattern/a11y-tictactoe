import React, {useState} from 'react';

import './App.css';

// Components
import {GameBoard} from './Components/GameBoard'

function App() {

  // setting up to use the State of each square on the board
  const [gameboard, setGameboard] = useState(Array(9).fill(null));

  // setting condition for players taking turns
  const [playerTurn, setPlayerTurn] = useState(true);

  // function to handle the click input of each button
  const handleClick = (squareIdx) => {
    const updateBoard = gameboard.map((value,idx) => {
      if (idx === squareIdx) {
        return playerTurn === true ? 'X' : 'O';
      } else {
        return value;
      }
    })

    setGameboard(updateBoard);
    // 
    setPlayerTurn(!playerTurn);
  }

  return (
    <div className="App">
      <h1>A11y Tic-Tac-Toe!</h1>
      <p>Activate a button to play!</p>

      <GameBoard gameboard={gameboard} onClick={handleClick}/>
    </div>
  );
}

export default App;
