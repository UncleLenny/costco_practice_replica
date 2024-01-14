import React from 'react'
import { Link } from 'react-router-dom'
import eddie from './images/eddie.webp'

function EddieBanner() {
  return (
    <div className='Epson'>
        <Link to='/'>
            <img src={eddie} alt="" />
        </Link>
    </div>
  )
}

export default EddieBanner