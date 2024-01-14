import React from 'react'
import { Link } from 'react-router-dom'
import "../../Style.scss"
import logo from '../../../images/Costco_Logo-1.png'

function MidNav() {
  return (
    <div className='midNav'>
        <div>
            <Link className='logo' to= "/"> <img src={logo} alt="" /> </Link>
        </div>
        <div>
            <input type="search" name="Search" placeholder='Search' id="" />
        </div>
        <div className='midlink'>
            <Link className='midNavLink' to= "/">Sign In / Register</Link>
            <Link className='midNavLink' to= "/">Orders & Returns</Link>
            <Link className='midNavLink' to= "/cart">Cart</Link>
        </div>
    </div>
  )
}

export default MidNav