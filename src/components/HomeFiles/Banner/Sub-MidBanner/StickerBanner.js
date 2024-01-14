import React from 'react'
import { Link } from 'react-router-dom'
import travel from './images/CostcoTravel.gif'
import wholesale from './images/wholesale.webp'
import goodrich from './images/goodrich.webp'

function StickerBanner() {
  return (
    <div className='StickerBanner'>
        <div className='stickerBan'>
            <Link  className='sticker' to='/'>
                <img src={travel} alt="" />
            </Link>
            
            <Link className='sticker' to='/'>
                <img  src={wholesale} alt="" />
            </Link>

            <Link className='sticker' to='/'>
                <img src={goodrich} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default StickerBanner