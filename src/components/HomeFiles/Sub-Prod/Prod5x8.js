import React from 'react'
import Prod5x8reuse from './Prod5x8reuse'
import box1_1 from './images/4-corners-laundry.avif'
import box1_2 from './images/4-corners-fridge.webp'
import box1_3 from './images/4-corners-ranges.avif'
import box1_4 from './images/4-corners-dishwasher.avif'
import box2_1 from './images/4-corners-tvs.avif'
import box2_2 from './images/4-corners-computer.avif'
import box2_3 from './images/4-corners-audio.avif'
import box2_4 from './images/4-corners-cellpone.webp'
import box3_1 from './images/4-corners-grocery.avif'
import box3_2 from './images/4-corners-personal.avif'
import box3_3 from './images/4-corners-beauty.avif'
import box3_4 from './images/4-corners-apparel.avif'
import box4_1 from './images/4-corners-livingroom.avif'
import box4_2 from './images/4-corners-bedroom.avif'
import box4_3 from './images/4-corners-dining.avif'
import box4_4 from './images/4-corners-mattress.avif'


function Prod5x8() {
  return (
    <div className='prd5x8'>
        <Prod5x8reuse top = "Appliances" boxImg1 = {box1_1} name1 = "Laundry" boxImg2 = {box1_2} name2 = "Refrigerators" boxImg3 = {box1_3} name3 = "Ranges" boxImg4 = {box1_4} name4 = "Dishwasher" />

        <Prod5x8reuse top = "Electronics" boxImg1 = {box2_1} name1 = "TV's" boxImg2 = {box2_2} name2 = "Computer" boxImg3 = {box2_3} name3 = "Audio" boxImg4 = {box2_4} name4 = "Cell Phones" />

        <Prod5x8reuse top = "Essentials" boxImg1 = {box3_1} name1 = "Grocery" boxImg2 = {box3_2} name2 = "Personal Care" boxImg3 = {box3_3} name3 = "Beauty" boxImg4 = {box3_4} name4 = "Apparel" />

        <Prod5x8reuse top = "Furniture" boxImg1 = {box4_1} name1 = "Living Room" boxImg2 = {box4_2} name2 = "Bedroom" boxImg3 = {box4_3} name3 = "Dining Room" boxImg4 = {box4_4} name4 = "Mattresses" />
    </div>
  )
}

export default Prod5x8