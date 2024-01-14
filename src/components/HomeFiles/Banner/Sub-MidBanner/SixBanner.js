import React from 'react'
import { Link } from 'react-router-dom'
import ban1 from './images/ban1.webp'
import ban2 from './images/ban2.webp'
import ban3 from './images/ban3.webp'
import ban4 from './images/ban4.webp'
import ban5 from './images/ban5.webp'
import ban6 from './images/ban6.webp'

function SixBanner() {
  return (
    <div className='sixBanner'>
        <div className='six'>
            <Link to='/'>
                <img src={ban1} alt="" />
            </Link>
        </div>
        <div className='six'>
            <Link to='/'>
                <img src={ban2} alt="" />
            </Link>
        </div>
        <div className='six'>
            <Link to='/'>
                <img src={ban3} alt="" />
            </Link>
        </div>
        <div className='six'>
            <Link to='/'>
                <img src={ban4} alt="" />
            </Link>
        </div>
        <div className='six'>
            <Link to='/'>
                <img src={ban5} alt="" />
            </Link>
        </div>
        <div className='six'>
            <Link to='/'>
                <img src={ban6} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default SixBanner