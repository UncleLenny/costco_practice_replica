import React from 'react'
import { Link } from 'react-router-dom'
import epson from './images/Epson.webp'

function EpsonBanner() {
  return (
    <div className='Epson'>
        <Link to='/'>
            <img src={epson} alt="" />
        </Link>
    </div>
  )
}

export default EpsonBanner