import React, { useContext, useEffect, useState } from 'react'
import logo from './images/icon.png'
import { useParams } from 'react-router-dom'
import { DataContext } from '../DataContext/DataContext';

function MainProd() {
    const { id } = useParams();
    const [cart, setCart] = useState([]);
    const [post, setPost] = useState({});
    const { addToCart } = useContext(DataContext);

    const getPost = (id) => {
        fetch(`http://159.65.21.42:9000/product/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setPost(data);
        });
    };

    useEffect(() => {
        id && getPost(id);
    }, [id]);
    
  return (
    <div className='MainProd'>
        <div className='flex'>
            <div className='flex mainProduct'>
                <img className='prodImg' src={`http://159.65.21.42:9000${post.image}`} alt="" />
                <div className='MainText'>
                    <p>{post.name}</p>
                    <span className='item'>Item Lenny</span>
                    <span className='review'>⭐⭐⭐⭐⭐ 4.5 (864) Write a review</span>
                    <span className='icon'><img src={logo} alt="" />Member Only Item</span>
                    <h4>${post.price}</h4>
                    <span className='shipping'>Shipping & Handling Included*</span>
                    <ul>
                        Features:
                        <li>{post.description}</li>
                        <li>Available in stock: {post.quantity}</li>
                        <li>(1) 3.3 fl oz</li>
                        <li>Eau de Parfum</li>
                    </ul>
                        <button className='cartBtn' onClick={() => addToCart(post)}> Add to Cart </button>
                </div>
            </div>

            <div className='Order'>
                <div className='cartOrder'>
                    <h3>Delivery</h3>
                    <h4>Estimated Wednesday, February 22<span>if ordered now.</span></h4>
                    <p>Delivery ZIP Code: 98101</p>
                    <button>Compare Product</button>
                </div>
                <div className='Delivery'>
                    <h3>Same-Day Delivery</h3>
                    <p>This item is currently not available for Same-Day Delivery.</p>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default MainProd