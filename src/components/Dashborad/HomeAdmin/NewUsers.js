import { useState } from 'react';
import Nav from './Nav';

function NewUsers() {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]:value});
    };

    let newUser = {
        name : user.name,
        phone : user.phone,
        email : user.email,
        password : user.password,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://159.65.21.42:9000/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(user),
        })
          .then((resp) => resp.json())
          .then((data) => {
            alert("New User has been Created");
            console.log(data);
          });
    };


  return (
    <div>
        <Nav />
        <div className='newUser'>
            <h1>Register a New User</h1>
            <form className='form' method="post" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="">User's Name:</label><span></span>
                    <input type="text" name="name" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <label for="">User's Email Address:</label><span></span>
                    <input type="email" name="email" class="inputs"  onChange={handleInput} required/>   
                </div>
                <div class="form-group">
                    <label for="">User's Phone Number:</label><span></span>
                    <input type="text" name="phone" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <label for="">User's Password:</label><span></span>
                    <input type="text" name="password" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <button class="form-btn">
                        Create User
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewUsers