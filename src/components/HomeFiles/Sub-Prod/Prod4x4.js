import React from 'react'
import '../../Style.scss'

function Prod4x4({pic, desc, amount}) {
  return (
    <div className="myCard">
        <img className='imgBox' src={pic} alt="" />
        <p>{desc}</p>
        <h4>{amount}</h4>
    </div>
  )
}

export default Prod4x4