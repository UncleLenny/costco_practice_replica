import React from 'react'
import { Link } from 'react-router-dom'
import dixie from './images/DixieUltra.webp'
import Stri from './images/StriVectin.webp'
import Shea from './images/Shea.webp'

function DixieStriShea() {
  return (
    <div className='dixieStriShea'>
        <div>
            <Link className='DSS' to='/'>
                <img src={dixie} alt="" />
                <p>Dixie Ultra Heavy Duty Paper Plates</p>
                <h3>Ultimate Strength for Hearty Meals</h3>
            </Link>

        </div>
        <div>
            <Link className='DSS' to='/'>
                <img src={Stri} alt="" srcset="" />
                <p>StriVectin Contour Restore Tightening & Sculpting Face Cream, 1 oz, 2-Pack</p>
                <h3>$21 OFF <br /> Valid 2/1/23 - 2/26/23</h3>
            </Link>
        </div>
        <div>
            <Link className='DSS' to='/'>
                <img src={Shea} alt="" srcset="" />
                <p>Now with 50% More Botanicals</p>
            </Link>
        </div>
    </div>
  )
}

export default DixieStriShea