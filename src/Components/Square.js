import React from 'react'

import './Square.css'

// Buttons are disabled once they are activated so users may only press once

export const Square = ({value, onClick}) => {
  return (
    <li>
        <button className='square' aria-label={value} disabled={value} onClick={onClick} >{value}</button>
    </li>
  )
}
