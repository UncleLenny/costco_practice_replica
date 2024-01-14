import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../images/download.webp'

function Banner() {
  return (
    <div className='banner'>
        <Link to="/"> <img src={banner} alt="" /> </Link>
    </div>
  )
}

export default Banner