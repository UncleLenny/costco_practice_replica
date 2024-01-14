import React, {useState} from 'react'
import '../../Style.scss'
import BtnSlider from './BtnSlider'
import dataProd from './dataProd'

export default function ProdSlide12x12() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataProd.length){
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === dataProd.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1){
            setSlideIndex(dataProd.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

  return (
    <div className='prod-slider'>
        {dataProd.map((obj, index) => {
            return(
                <div 
                    key={obj.id} 
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                    <img 
                    src={process.env.PUBLIC_URL + `/images/img${index + 1}.webp`}
                    alt=""/>
                    <h2 className='slideHead'>{obj.title}</h2>
                    <div className='centre'>
                        <div className='bodySlide'>
                            <h4>{obj.desc}</h4>
                            <p>{obj.under}</p>
                        </div>
                    </div>
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-dots">
            {Array.from({length: 3}).map((item, index) => (
                <div
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
            ))}
        </div>
    </div>
  )
}