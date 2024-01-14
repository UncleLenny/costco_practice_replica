import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars} from 'react-icons/fa'

function BlueNav() {
  return (
    <div className='backBlue'>
        <div className='blueLinks'>
            <Link className='bnl' to='/shop'> <FaBars className='bars'/> Shop</Link>
            <Link className='bnl' to='/'> Grocery</Link>
            <Link className='bnl' to='/'> Same-Day</Link>
            <Link className='bnl' to='/'> Deals</Link>
            <Link className='bnl' to='/'> Business Delivery</Link>
            <Link className='bnl' to='/'> Optical</Link>
            <Link className='bnl' to='/'> Pharmacy</Link>
            <Link className='bnl' to='/'> Services</Link>
            <Link className='bnl' to='/'> Photo</Link>
            <Link className='bnl' to='/'> Travel</Link>
            <Link className='bnl' to='/'> Membership</Link>
            <Link className='bnl' to='/'> Locations</Link>
        </div>
    </div>
  )
}

export default BlueNav