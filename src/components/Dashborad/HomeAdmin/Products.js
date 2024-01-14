import React from 'react';
import Nav from './Nav';
import { useEffect, useState } from 'react';

function Products() {
    const [post, setPost] = useState([]);
    const [newSet, setNewSet] = useState(false);

    const newProducts = async () => {
      const response = await fetch('http://159.65.21.42:9000/products');
      const data = await response.json();
      const costcoProducts = data.filter(post => post.category === "Costco Lenny");
      setPost(costcoProducts);
    }

    useEffect(() => {
        fetch("http://159.65.21.42:9000/products")
            .then((resp) => resp.json())
            .then((data) => setPost(data))
            .catch(error => {
              console.log(error);
            });
    }, []);

    useEffect(() => {
      if(newSet){
        newProducts()
      }
    }, [newSet]);

    useEffect(() => {
      newProducts();
    }, []);

    const deletePost = (id) => {
      fetch(`http://159.65.21.42:9000/product/${id}`, {
        method: "DELETE",
      })
      .then((resp) => resp.json())
      .then((data) => {
        alert("Product has successfully been deleted");
        newProducts();
      })
      .catch((error) => {
        console.error(error)
      });
    };

  return (
    <div>
      <Nav />

      <div>
        <div className="prodContainer">
          {post.filter((item) => item.category === "Costco Lenny").map((post => (
            <div key={post._id}>
              <hr />
              <div className='prdFlex'>
                <img src={`http://159.65.21.42:9000${post.image}`} alt="" />
                <div className='prdDetails'>
                  <h3>{post.name}</h3>
                  <span>{post.category}</span>
                  <p className='prdPrice'>${post.price}</p>
                  <p className='prdQty'> Qty: {post.quantity}</p>
                  <p className='prdDesc'>{post.description}</p>
                  <div className="prdBtns">
                    <button className='editBtn'>Edit</button>
                    <button className='delBtn' onClick={() => deletePost(post._id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          )))}
        </div>
      </div>
          
    </div>
  )
}

export default Products