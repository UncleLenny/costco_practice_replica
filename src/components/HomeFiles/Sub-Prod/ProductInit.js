import React from 'react'
import Prod4x4 from './Prod4x4'
import box1 from './images/23w06103-013123-side-kick-2.avif'
import box2 from './images/23w06104-side-kick-2.avif'
import box3 from './images/imageService (1).webp'
import box4 from './images/imageService.webp'
import '../../Style.scss'
import ProdSlide12x12 from './ProdSlide12x12'
import Prod5x8 from './Prod5x8'

function ProductInit() {
  return (
    <div>
      <div className='Maingridbox'>
          <ProdSlide12x12 />
          <div className='gridbox'>
              <Prod4x4 pic = {box2} desc = "$1,999.99 After $1,100 OFF"/>
              <Prod4x4 pic = {box4} desc = "$579.99 After $120 OFF" />
              <Prod4x4 pic = {box1} desc = "LG 64' Class - OLED C2 Series - 4K UHD OLED TV " amount = "$1,699.99" />
              <Prod4x4 pic = {box3} desc = "Inspire Fitness FTX Functional Trainer" amount = "$1,199.99 After $300 OFF" />
          </div>
      </div>
        <Prod5x8 />
    </div>
  )
}

export default ProductInit