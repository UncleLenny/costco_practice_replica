import React, { useContext } from 'react'
import { DataContext } from '../DataContext/DataContext'
import { IoTrashOutline } from "react-icons/io5"

function CartItem() {
  const { cart, grandTotal, increaseQty, decreaseQty, deleteCartItem } = useContext(DataContext);

  return (
    <div>
      <hr />
      {cart.length ? (
        <div className='itemCont'>
          {cart.map((cartItem) => (
            <div key={cartItem._id} className='flex'>
              <img className='cartpic' src={cartItem.category.image} alt="" />
              <div className='cartdetails'>
                  <p>{cartItem.title}</p>
                  <span>Item {cartItem.category}</span>
                  <p>{cartItem.description}</p>
                  <h4>${cartItem.price}</h4>

                  <div className='flex'>
                    <div className='buttons'>
                      <button onClick={() => decreaseQty(cartItem)}>-</button>
                      <h3>1</h3>
                      <button onClick={() => increaseQty(cartItem)}>+</button>
                    </div>

                    <div className='summation'>
                      <p>Total</p>
                      <h2>${cartItem.totalPrice}</h2>
                    </div>
                  </div>
                    <IoTrashOutline className='deleteCartItem' onClick={() => deleteCartItem(cartItem)}/>
              </div>
            </div>
          ))}
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
      ) : (
        <p>
          Cart is Empty
        </p>
      )}
    </div>
  )
}

export default CartItem