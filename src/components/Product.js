import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Desc from './ProductFiles/Desc'
import MainProd from './ProductFiles/MainProd'
import PrdInfo from './ProductFiles/PrdInfo'

function Product() {

  return (
    <div>
      <Nav />
      <div className='Product'>
          <div>
            <MainProd />
            <Desc />
            <PrdInfo />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product