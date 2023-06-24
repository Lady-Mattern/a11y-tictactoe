import React, {useState} from 'react';

import './App.css';

// Components
import {GameBoard} from './Components/GameBoard'

function App() {
  // setting up to use the State of each square on the board while iterating through array of squares
  const [gameboard, setGameboard] = useState(Array(9).fill(null));

  // setting condition for players taking turns. No computer this time around
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

    checkWinner(updateBoard);

    setGameboard(updateBoard);
    
    setPlayerTurn(!playerTurn);
  }

// Adding the game logic
  const checkWinner = board => {
    const lines = [
      // Board array is indexed such that top left is 0, bottom right is 8
  
      // Horizontal lines
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      // Vertical lines
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      // Diagonal lines
      [0, 4, 8], [2, 4, 6]
    ]
  
    for (const line of lines) {
      const [a, b, c] = line
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== " ") {
        console.log(board[a])
        return board[a] // Return the winning player string ('x' or 'o')
      }
    }
  
    return null // Return null if there is no winner yet
  }
  
  
  const checkTie = board => {
    // If no winners and no empty spaces on the board, return true
    if (checkWinner(board))
      return false
    return !board.includes("")
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
