import React from 'react'
import { Link } from 'react-router-dom'
import activeshoe from './images/shoeBanner.webp'

function ActiveShoeBanner() {
  return (
    <div className='Epson'>
        <Link to='/'>
            <img src={activeshoe} alt="" />
        </Link>
    </div>
  )
}

export default ActiveShoeBanner