import React from 'react'

function ShopNav() {
  return (
    <div className='ShopNav'>
        <div className='NavHead'>
            <h2>Filter Results</h2>
            <span>Clear all</span>
        </div>
            <hr />
        <div className='subNavhead'>
            <h3>Category</h3>
            <span>-</span>
        </div>
        <div className='selectCat'>
            <span>Select a Different Category</span>
            <ul>
                <li>Beauty</li>
                <li>Fragrances</li>
            </ul>
        </div>
            <hr />
        <div className='delivery'>
            <h4>
                Delivery Location
            </h4>
            <span>98101</span>
            <div className='delivCheck'>
                <input type="checkbox" id="" value="Delivery" /> Delivery
                <p> (50) </p>
            </div>
        </div>
            <hr />
        <div className='subNavPrice'>
            <h3>Price</h3>
            <div className='navPrice'>
                <input type="checkbox" name="" id="" /> $50 to $100
                <span>(16)</span>
            </div>
            <div className='navPrice'>
                <input type="checkbox" name="" id="" /> $100 to $200
                <span>(18)</span>
            </div>
            <div className='navPrice'>
                <input type="checkbox" name="" id="" /> $200 to $500
                <span>(15)</span>
            </div>
            <div className='navPrice'>
                <input type="checkbox" name="" id="" /> $500 to $1000
                <span>(1)</span>
            </div>
        </div>
            <hr />
        <div className='subNavPrice'>
            <h3>Brand</h3>
            <div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> CREED
                    <span>(3)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Chloé
                    <span>(3)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Eau D'Italie
                    <span>(3)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Frederic Malle
                    <span>(3)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Hermès
                    <span>(3)</span>
                </div>
            </div>
        </div>

        <hr />
        
        <div className='subNavPrice'>
            <h3>Fragrance Type</h3>
            <div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Cologne
                    <span>(3)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Cologne
                    <span>(1)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Eau de Parfum
                    <span>(37)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Eau de Toilette
                    <span>(10)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Extrait de Parfum
                    <span>(2)</span>
                </div>
            </div> 
        </div>

        <hr />

        <div className='subNavPrice'>
            <h3>Gender</h3>
            <div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> CREED
                    <span>(3)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Chloé
                    <span>(3)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Eau D'Italie
                    <span>(3)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Frederic Malle
                    <span>(3)</span>
                </div>
                <div className='navPrice'>
                    <input type="checkbox" name="" id="" /> Hermès
                    <span>(3)</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ShopNav