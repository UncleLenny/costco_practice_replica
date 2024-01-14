import React from 'react'
import Banner from './HomeFiles/Banner/Banner'
import ProductInit from './HomeFiles/Sub-Prod/ProductInit'
import MidBanner from './HomeFiles/Banner/MidBanner'
import AppleBanner from './HomeFiles/Banner/Sub-MidBanner/AppleBanner'
import ProdGrid from './HomeFiles/Sub-Prod/ProdGrid'
import ValinetineBanner from './HomeFiles/Banner/Sub-MidBanner/ValentineBanner'
import Diapers from './HomeFiles/Banner/Sub-MidBanner/Diapers'
import GridBanner from './HomeFiles/Banner/Sub-MidBanner/GridBanner'
import Last12and4 from './HomeFiles/Sub-Prod/Last12and4'
import Kcup from './HomeFiles/Banner/Sub-MidBanner/Kcup'
import StickerBanner from './HomeFiles/Banner/Sub-MidBanner/StickerBanner'
import SamsungAndMicrosoft from './HomeFiles/Banner/Sub-MidBanner/SamsungAndMicrosoft'
import EpsonBanner from './HomeFiles/Banner/Sub-MidBanner/EpsonBanner'
import DixieStriShea from './HomeFiles/Banner/Sub-MidBanner/DixieStriShea'
import EddieBanner from './HomeFiles/Banner/Sub-MidBanner/EddieBanner'
import ActiveShoeBanner from './HomeFiles/Banner/Sub-MidBanner/ActiveShoeBanner'
import SixBanner from './HomeFiles/Banner/Sub-MidBanner/SixBanner'
import Nav from './Nav'
import Footer from './Footer'


function Home() {
  return (
    <div>
        <Nav />
          <Banner />
          <ProductInit />
          <MidBanner />
          <AppleBanner />
          <ProdGrid />
          <ValinetineBanner />
          <Diapers />
          <GridBanner />
          <Last12and4 />
          <Kcup />
          <StickerBanner />
          <SamsungAndMicrosoft />
          <EpsonBanner />
          <DixieStriShea />
          <EddieBanner />
          <ActiveShoeBanner />
          <SixBanner />
        <Footer />
    </div>
  )
}

export default Home