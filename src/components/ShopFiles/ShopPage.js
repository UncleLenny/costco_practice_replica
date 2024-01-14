import React, { useEffect, useState } from 'react'
import c from './images/icon.png'
import { Link } from 'react-router-dom'

function ShopPage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
      fetch("http://159.65.21.42:9000/products")
          .then((resp) => resp.json())
          .then((data) => setPost(data))
          .catch(error => {
            console.log(error);
          });
  }, []);

  return (
    <div className='shopPage'>
        <h1 className="headings">Fragrances</h1>
        <hr />
        <div className="cards">
        {post.filter((post) => post.category === "Costco Lenny").map((post) => (
          <div>
            <Link to={`/Product/${post._id}`} key={post._id} style={{textDecoration: 'none', color: '#333333'}}>
              <div className="card">
                <div className='cardImg'>
                    <img src={`http://159.65.21.42:9000${post.image}`} alt="" />
                </div>
                <div className='cardDetails'>
                    <div className='CardIcon'>
                        <img src={c} alt="" />
                        <span>Member Only Item</span>
                    </div>
                    <h2>{post.name}</h2>
                    <p>- {post.category}</p>
                    <p>- {post.description}</p>
                    <span>⭐⭐⭐⭐{post.review}</span>
                    <input type="checkbox" name="" id="" /> Compare Product <br />
                    <button>View Product</button>
                </div>
              </div>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
    )
}

export default ShopPage