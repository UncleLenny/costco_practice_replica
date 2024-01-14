import React, {useState} from 'react'
import '../../../Style.scss'
import BtnSlider from './BtnSlider'
import SlideBanner from './SlideBanner'

export default function BannerSlider() {

    const [BanSlide, setBanSlide] = useState(1)

    const nextSlide = () => {
        if(BanSlide !== SlideBanner.length){
            setBanSlide(BanSlide + 1)
        } else if (BanSlide === SlideBanner.length){
            setBanSlide(1)
        }
    }
    const prevSlide = () => {
        if(BanSlide !== 1){
            setBanSlide(BanSlide - 1)
        } else if (BanSlide === 1){
            setBanSlide(SlideBanner.length)
        }
    }

    const moveDot = index => {
        setBanSlide(index)
    }

  return (
    <div className='midBanslider'>
        {SlideBanner.map((obj, index) => {
            return(
                <div 
                    key={obj.id} 
                    className={BanSlide === index + 1 ? "slide active-anim" : "slide"}>
                    <img 
                    src={process.env.PUBLIC_URL + `./banner-img/download${index + 1}.webp`}
                    alt=""/>
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        
        <div className="Bancontainer-dots">
            {Array.from({length: 10}).map((item, index) => (
                <div
                onClick={() => moveDot(index + 1)}
                className={BanSlide === index + 1 ? "Bdot active" : "Bdot"}></div>
            ))}
        </div>
    </div>
)};