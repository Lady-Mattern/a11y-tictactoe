import React from 'react'

// Components
import { Square } from './Square'

// Styles
import './GameBoard.css'

export const GameBoard = ({gameboard, onClick}) => {
  return (
    <ol className='game-board'>
      {gameboard.map((value, idx) => {
        return <Square value={value} onClick={() => onClick(idx)}/>
      })}
    </ol>
  )
}
