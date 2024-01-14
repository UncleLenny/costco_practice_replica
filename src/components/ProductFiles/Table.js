import React from 'react'

function Table() {
  return (
    <div className='Table'>
        <h1>Specifications</h1>
        <table className='table'>
            <tr className='r1'>
                <td>Brand</td>
                <td>CREED</td>
            </tr>
            <tr className='r2'>
                <td>Container Size</td>
                <td>3.4 Ounce</td>
            </tr>
            <tr className='r1'>
                <td>Fragrance Type</td>
                <td>Eau de Parfum</td>
            </tr>
            <tr className='r2'>
                <td>Gender</td>
                <td>Men's</td>
            </tr>
        </table>
    </div>
  )
}

export default Table