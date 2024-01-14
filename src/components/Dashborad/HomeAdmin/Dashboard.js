import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import prodImg from './images/product.png'
import userImg from './images/users.png'
import cartImg from './images/shopping-cart.png'

function Dashboard() {
  const [post, setPost] = useState([]);

  useEffect(() => {
      fetch("http://159.65.21.42:9000/products")
          .then((resp) => resp.json())
          .then((data) => setPost(data));
  }, []);

  const [user, setUser] = useState([]);

  useEffect(() => {
      fetch("http://159.65.21.42:9000/users")
          .then((resp) => resp.json())
          .then((data) => setUser(data));
  }, []);

  var tenPosts = post.slice(0, 10);

  return (

    <div>
        <Nav />
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className='Totals'>
            <div className='TotalBox'>
              <img src={prodImg} alt="" />
              <h2>Total Products</h2>
              <span>{post.filter((item) => item.category === "Costco Lenny").length}</span>
            </div>
            <div className='TotalBox'>
              <img src={userImg} alt="" />
              <h2>Total Users</h2>
              <span>{user.length}</span>
            </div>
            <div className='TotalBox'>
              <img src={cartImg} alt="" />
              <h2>Total Products in Cart</h2>
              <span>{cartImg.length}</span>
            </div>
          </div>
        </div>

        <div>
          <table className='DashTable'>
            <tr className='headtr'>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Price</th>
            </tr>

            {post.filter((item) => item.category === "Costco Lenny").map((post, key) => {
              return(
                <tr key={key} className='bodytr'>
                  <td>{post.name}</td>
                  <td>{post.category}</td>
                  <td>{post.price}</td>
                </tr>
              )
            })}
          </table>
        </div>
        <Footer />
    </div>
  )
}

export default Dashboard