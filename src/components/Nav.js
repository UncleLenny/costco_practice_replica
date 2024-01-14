import React from 'react'
import MidNav from './HomeFiles/Sub-Nav/MidNav'
import Nav1 from './HomeFiles/Sub-Nav/Nav1'
import '../App.scss'
import BlueNav from './HomeFiles/Sub-Nav/BlueNav'
import LastNav from './HomeFiles/Sub-Nav/LastNav'

function Nav() {
  return (
    <div className='navSection1'>
      <div className='navnav'>
        <Nav1 />
        <MidNav />
      </div>
      <BlueNav />
      <LastNav />
    </div>
  )
}

export default Nav