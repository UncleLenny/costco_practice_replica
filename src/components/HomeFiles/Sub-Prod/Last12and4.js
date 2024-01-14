import React from 'react'
import { Link } from 'react-router-dom'
import bigImg from './images/Bigsamsung.avif'
import smallImg1 from './images/Smallsamsung1.avif'
import smallImg2 from './images/Smallsamsung2.avif'
import smallImg3 from './images/Smallsamsung3.avif'
import smallImg4 from './images/Smallsamsung4.avif'
import Prod4x4 from './Prod4x4'

function Last12and4() {
  return (
    <div className='Last12and4'>
        <div>
            <Link to='/'>
                <img  style={{borderRadius: '10px'}} src={bigImg} alt="" />
            </Link>
        </div>
        <div className='lastProdGrid'>
            <Prod4x4 pic={smallImg1} desc='Samsung 65" Class - OLED S95B Series 4K UHD TV' amount='$1,799.99 Delivered' />

            <Prod4x4 pic={smallImg2} desc='Samsung 65" Class - QN90BD Series 4K UHD Neo QLED LCD TV' amount='$1,499.99 Delivered' />

            <Prod4x4 pic={smallImg3} desc='Samsung 65" Class - QN85BD Series 4K UHD Neo QLED LCD TV' amount='$1,599.99 Delivered Plus Receive a $200 Costco Shop Card' />

            <Prod4x4 pic={smallImg4} desc='Samsung 75" Class - Q80BD Series 4K UHD QLED LCD TV' amount='$1,599.99 Delivered' />
        </div>
    </div>
  )
}

export default Last12and4