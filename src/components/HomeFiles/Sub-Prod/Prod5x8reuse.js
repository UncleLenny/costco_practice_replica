import React from 'react'
import '../../Style.scss'

function Prod5x8reuse({top, boxImg1, boxImg2, boxImg3, boxImg4, name1, name2, name3, name4}) {
  return (
    <div className="box5x8">
        <h2>{top}</h2>
        <div className='gridddd'>
            <div className='boxCircle'>
                <div className='grey'>
                    <img className='tinyImg' src={boxImg1} alt="" />
                </div>
                <p>{name1}</p>
            </div>
            <div className='boxCircle'>
                <div className='grey'>
                    <img className='tinyImg' src={boxImg2} alt="" />
                </div>
                <p>{name2}</p>
            </div>
            <div className='boxCircle'>
                <div className='grey'>
                    <img className='tinyImg' src={boxImg3} alt="" />
                </div>
                <p>{name3}</p>
            </div>
            <div className='boxCircle'>
                <div className='grey'>
                    <img className='tinyImg' src={boxImg4} alt="" />
                </div>
                <p>{name4}</p>
            </div>
        </div>
    </div>
  )
}

export default Prod5x8reuse