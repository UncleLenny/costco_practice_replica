import React from 'react'
import grid1 from './images/grid.webp'
import grid2 from './images/grid2.webp'
import grid3 from './images/grid3.webp'
import grid4 from './images/grid4.webp'
import grid5 from './images/grid5.webp'
import grid6 from './images/grid6.webp'
import grid7 from './images/grid7.webp'
import grid8 from './images/grid8.webp'
import Prod4x4 from './Prod4x4'

function ProdGrid() {
  return (
    <div className='ProdGrid'>
        <div className='Grid4x4'>
            <Prod4x4 pic = {grid1} desc = "$999.99 After $300 OFF"/>

            <Prod4x4 pic = {grid2} desc = "$2,499.99 After $900 OFF" />

            <Prod4x4 pic = {grid3} desc = "$899.99 After $300 OFF"/>

            <Prod4x4 pic = {grid4} desc = "$300 - $700 OFF"/>

            <Prod4x4 pic = {grid5} desc = "$199.79 After $80 OFF"/>

            <Prod4x4 pic = {grid6} desc = "Apple Watch Series 8 GPS" amount="$60 OFF" />

            <Prod4x4 pic = {grid7} desc = "$270 OFF" />

            <Prod4x4 pic = {grid8} desc = "$369.99 After $100 OFF" />
        </div>
    </div>
  )
}

export default ProdGrid