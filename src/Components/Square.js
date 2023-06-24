import React from 'react'

import './Square.css'

export const Square = ({value, onClick}) => {
  return (
    <li>
        <button className='square' onClick={onClick} >{value}</button>
    </li>
  )
}
