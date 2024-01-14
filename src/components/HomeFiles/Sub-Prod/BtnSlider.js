import React from 'react'
import '../../Style.scss'
import leftArrow from './icons/left-arrow.png'
import rightArrow from './icons/right-arrow.png'

export default function BtnSlider({direction, moveSlide}) {
  return (
    <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next' : "btn-slide prev btnLeft"}>
        <img src={direction === "next" ? rightArrow : leftArrow}
        alt=""/>
    </button>
  )
}