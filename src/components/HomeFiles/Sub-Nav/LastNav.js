import React from 'react'
import { Link } from 'react-router-dom'
import { FaDotCircle } from 'react-icons/fa'

function LastNav() {
  return (
    <div className='LastNav'>
        <div className='lastLinks'>
            <div className='lastflex'>
                <div className='lastcontent'>
                    <span>  My Warehouse</span>
                    <p> <FaDotCircle/>  Seattle</p>
                </div>
                <div className='lastcontent'>
                    <span>Delivery Location</span>
                    <p>98101</p>
                </div>
            </div>
            <div className='lastrightLinks'>
                <Link className='lrl' to='/' >List</Link> / <Link className='lrl' to='/'>Reorder</Link>
            </div>
        </div>
        <h5>Closed: Open 10:00 AM Wednesday</h5>
    </div>
  )
}

export default LastNav