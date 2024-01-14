import React, { useContext } from 'react'
import CartItem from './CartFiles/CartItem'
import { DataContext } from './DataContext/DataContext'
import { IoTrashBinOutline } from 'react-icons/io5'
import Nav from './Nav'
import Footer from './Footer'

function Cart() {
    const { cart, grandTotal, increaseQty, decreaseQty, deleteCartItem } = useContext(DataContext);
    
  return (
    <div>
        <Nav />
        <div className='Cart'>
            <div className='cartHead'>
            <h1>Cart</h1> <h3></h3>
            </div>
            <div>
                <div className='cartpage'>
                    <div>
                        {cart.length ? (
                            <div className='itemCont'>
                                <div>
                                    {cart.map((cartItem) => (
                                        <div>
                                            <hr />
                                                <div key={cartItem._id} className='flex itemfill'>
                                                <img className='cartpic' src={`http://159.65.21.42:9000${cartItem.image}`} alt="" />
                                                <div className='cartdetails'>
                                                    <p>{cartItem.title}</p>
                                                    <span>Item {cartItem.category}</span>
                                                    <p>{cartItem.description}</p>
                                                    <h4>${cartItem.price}</h4>

                                                    <div className='flex'>
                                                        <div className='buttons'>
                                                        <button onClick={() => decreaseQty(cartItem)}>-</button>
                                                        <h3>{cartItem.quantity}</h3>
                                                        <button onClick={() => increaseQty(cartItem)}>+</button>
                                                        </div>

                                                        <div className='summation'>
                                                        <p>Total</p>
                                                        <h2>${cartItem.totalPrice}</h2>
                                                        </div>
                                                    </div>
                                                    <IoTrashBinOutline className='deleteCartItem' onClick={() => deleteCartItem(cartItem)}/>
                                                </div>
                                                <div className='itemRight'>
                                                    <div className='cartRightBox1'>
                                                        <h4>Standard : $7.99</h4>
                                                        <span>Estimated Delivery</span>
                                                        <h3>Thursday, February 16, 2023</h3>
                                                    </div>
                                                    <div className='cartRightBox2'>
                                                        <h4>Express 1 to 2 Business Days : $17.02</h4>
                                                        <span>Estimated Delivery</span>
                                                        <h3>Wednesday, February 15, 2023</h3>
                                                    </div>
                                                    <div className='cartRightBox3'>
                                                        <h4>Warehouse Pick Up <span>(Members Only)</span></h4>
                                                        <h3>Select a Warehouse</h3>
                                                        <h5>Standard : $7.99</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            <div className='itemRightside'>
                                <div className='totalInfo'>
                                    <h3>Subtotal</h3>
                                    <h3>${grandTotal}</h3>
                                </div>
                                <div className='totalInfo'>
                                    <span>Shipping & Handling for 98101</span>
                                    <span>$7.99</span>
                                </div>
                                <hr />
                                <div className='estTotal'>
                                    <h3>Estimated Total</h3>
                                    <span>${grandTotal + 7.99}</span>
                                </div>
                                <p>Applicable taxes will be calculated at checkout.</p>
                                <button>Checkout</button>
                            </div>
                            
                            </div>
                        ) : (
                            <p style={{margin:"25px"}}>
                                Your shopping cart is empty. Please add at least one item to your cart before checking out.
                            </p>
                        )}
                    </div>
                </div>
                <hr />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart