import React from 'react'
import { Link } from 'react-router-dom'
import BannerComponent from './BannerComponent'
import gridBan1 from './images/gridbanner.webp'
import gridBan2 from './images/gridbanner2.webp'

function GridBanner() {
  return (
    <div>
        <div className='GBcontent'>
            <Link className="GBcon" to='/'>
                <BannerComponent CompBanner={gridBan1}/>
            </Link>
            <Link className="GBcon" to='/'>
                <BannerComponent CompBanner={gridBan2}/>
            </Link>
        </div>
    </div>
  )
}

export default GridBanner