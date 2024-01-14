import React from 'react'
import Nav from './Nav'
import { useEffect, useState } from 'react';

function Users() {
  const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("http://159.65.21.42:9000/users")
            .then((resp) => resp.json())
            .then((data) => setUser(data));
    }, []);
  return (
    <div>
        <Nav />

        <div className='userGrid'>
        <div className="userContainer">
          {user.map((user) => (
            <div key={user.id} className="">
              <hr />
              <div className='usersDeet'>
                <div className='prdDetails'>
                  <h3>{user.name}</h3>    
                  <p className='prdPrice'>${user.phone}</p>
                  <p className='prdQty'> Qty: {user.email}</p>
                  <p className='prdDesc'>{user.password}</p>
                  <div className="prdBtns">
                    <button className='editBtn'>Edit</button>
                    <button className='delBtn'>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Users