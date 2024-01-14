import React from 'react'
import { Link } from 'react-router-dom'
import "../../Style.scss"
import { FaAngleRight } from 'react-icons/fa'

function Nav1() {
  return (
    <div className='topNav'>
        <ul>
            <Link className='topNavLink' to= "/">While Supplies Last</Link>
            <Link className='topNavLink' to= "/">Treasure Hunt</Link>
            <Link className='topNavLink' to= "/">Whats New</Link>
            <Link className='topNavLink' to= "/">Same-Day</Link>
            <Link className='topNavLink' to= "/">Online-Only</Link>
            <Link className='topNavLink' to= "/">Warehouse Savings</Link>
            <Link className='topNavLink' to= "/">Get Email Offers</Link>
            <Link className='topNavLink' to= "/">Customer Service</Link>
            <Link className='topNavLink' to= "/HomeAdmin">ADMIN <FaAngleRight /> </Link>
        </ul>
    </div>
  )
}

export default Nav1