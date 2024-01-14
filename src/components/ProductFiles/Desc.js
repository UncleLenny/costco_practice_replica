import React from 'react'
import Table from './Table'

function Desc() {
  return (
    <div>
        <div>

        </div>
        <div className='ProdDescription'>
            <h1>Product Details</h1>
            <h3>Limit 5 Per Membership</h3>

            <div className='features'>
                <h3>Features:</h3>
                <ul>
                    <li>3.3 fl oz</li>
                    <li>Eau de Parfum</li>
                </ul>
            </div>

            <div className='notes'>
                <h3>Fragrance Notes:</h3>
                <ul>
                    <li>Top: Apple, Blackcurrant, Pineapple</li>
                    <li>Middle: Jasmine, Birch, Pinkberries</li>
                    <li>Base: Musk, Oakmoss, Vanilla</li>
                </ul>
            </div>

            <div className='ingredients'>
                <h3>Ingredients:</h3>
                <span>
                    Alcohol, Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Ethylhexyl Methoxycinnamate, Butyl Methoxydibenzoylmethane, Ethylhexyl Salicylate, Citral, Citronellol, Bht
                </span>
                <span>
                    Note that ingredients may change from time to time. Please refer to the ingredient list on the product package you receive for the most current information.
                </span>
            </div>
            <hr />
            <Table />
            <hr />
            <div className='shipping'>
                <h3>Shipping & Returns</h3>
                <span>
                This item is covered by Costco's guarantee to refund your purchase price if you are not completely satisfied. Costco's guarantee applies, even though this item may not be covered by the manufacturer's warranty, because Costco is not an "authorized" dealer of the merchandise.
                <br />
                Standard shipping via UPS Ground is included in the quoted price.
                <br />
                Delivery is not available to Alaska, Hawaii, Puerto Rico or other locations that require air delivery service.
                <br />
                Costco.com products can be returned to any of our more than 800 Costco warehouses worldwide.
                </span>
                <h1>SHOP CONFIDENTLY</h1>
                <span>
                    We are committed to offering the best value to our members, with a risk-free 100% satisfaction guarantee on both your membership and merchandise. If you have questions about your membership or products you've purchased at Costco, please visit the membership counter at your local Costco or <p>Contact Customer Service.</p> 
                    <br />
                    View Costco's Return Policy
                    <br />
                    For manufacturer warranty information, please contact us.
                    <br />
                    Costco Concierge Services | Technical Support
                    Free technical support exclusive to Costco members for select electronics and consumer goods.
                    <br />
                    How To Return Costco.com Orders
                </span>
            </div>
        </div>
    </div>
  )
}

export default Desc