import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/CostcoLogo.png'

function Nav() {
  return (
    <div className='adminNav'>
        <div className="topnav">
            <img src={logo} alt="" />
            <input type="search" name="Search" placeholder='Search' id="" />
            <Link to='/'> <span>Logout</span></Link>
        </div>
        <div className="mainNav">
            <div className='eighty'>
                <Link to='/Dashboard' className='links'>Home</Link>
                <Link to='/Products' className='links'>Products</Link>
                <Link to='/Users' className='links'>Users</Link>
                <Link to='/NewProduct' className='links'>New Products</Link>
                <Link to='/NewUsers' className='links'>New Users</Link>
            </div>
        </div>
    </div>
  )
}

export default Nav