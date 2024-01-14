import React from 'react'
import { Link } from 'react-router-dom'

function BannerComponent({CompBanner}) {
  return (
    <div className='CompBan'>
        <Link to="/"> 
            <img src={CompBanner} alt="" /> 
        </Link>
    </div>
  )
}

export default BannerComponent