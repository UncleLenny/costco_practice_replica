import React from 'react'
import BannerComponent from './BannerComponent'
import valentine from './images/valentine.webp'

function ValentineBanner() {
  return (
    <div className='valentine'>
        <BannerComponent CompBanner={valentine} />
    </div>
  )
}

export default ValentineBanner