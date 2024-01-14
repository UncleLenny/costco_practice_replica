import React from 'react'
import { Link } from 'react-router-dom'
import K_cup from './images/Kcup.webp'

function Kcup() {
  return (
    <div className='kcup'>
        <Link to='/'>
            <img className='kkcup' src={K_cup} alt="" />
        </Link>
    </div>
  )
}

export default Kcup