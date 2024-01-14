import React from 'react'
import BannerComponent from './BannerComponent'
import diapers from './images/diapers.webp'

function Diapers() {
  return (
    <div>
        <BannerComponent CompBanner={diapers}/>
    </div>
  )
}

export default Diapers