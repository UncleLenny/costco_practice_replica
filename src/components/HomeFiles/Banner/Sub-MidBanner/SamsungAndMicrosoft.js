import React from 'react'
import { Link } from 'react-router-dom'
import samsung from './images/PerfectPair.webp'
import microsoft from './images/SurfacePro.webp'

function SamsungAndMicrosoft() {
  return (
    <div className='SandM'>
        <div className='SandMcontent'>
            <Link className='SnM' to='/'>
                <img src={samsung} alt="" />
            </Link>

            <Link className='SnM' to='/'>
                <img src={microsoft} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default SamsungAndMicrosoft