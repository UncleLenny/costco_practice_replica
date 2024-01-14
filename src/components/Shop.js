import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import ShopNav from './ShopFiles/ShopNav'
import ShopPage from './ShopFiles/ShopPage'

function Shop() {
  return (
    <div>
      <Nav />
      <div className='shop'>
          <div>
            <Link to='/'>Home</Link>
              /
            <span> Beauty </span>
            /
            <span> Fragrances </span>
          </div>
          <div className='MainShop'>
            <ShopNav />
            <ShopPage />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop