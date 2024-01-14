import React from 'react';
import { useState } from 'react';
import Nav from './Nav';


const NewProduct = () => {
    const [post, setPost] = useState({
        name: "",
        category: "",
        price: "",
        quantity: "",
        description: "",
    });

    const [files, setFiles] = useState({
        image: null
    })

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "image") {
          let file = e.target.files[0];
          setFiles({image: file})
        }
        setPost({ ...post, [name]: value });
    };

    let file = files.image;
    let name = post.name;
    let quantity = post.quantity;
    let category = post.category;
    let price = post.price;
    let description = post.description;
    let formData = new FormData()
    formData.append("name", name);
    formData.append("category", category)
    formData.append("quantity", quantity)
    formData.append("price", price)
    formData.append("description", description)
    formData.append("image", file)

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://159.65.21.42:9000/create/product", {
          method: "POST",
          enctype: "multipart/form-data",
          body: formData,
          processData: false,
          contentType: false,
        })
          .then((resp) => resp.json())
          .then((data) => {
            alert("Post has been Created");
            console.log(data);
        });
    };
    
  return (
    <div>
        <Nav />
        <div className='newProd'>
            <h1>Register a New Product</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="">Name of the Product:</label><span></span>
                    <input type="text" name="name" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <label for="">Category of the Product:</label><span></span>
                    <input type="text" name="category" class="inputs" onChange={handleInput} required/>   
                </div>
                <div class="form-group">
                    <label for="">Price of the Product:</label><span></span>
                    <input type="text" name="price" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <label for="">Quantity of the Product:</label><span></span>
                    <input type="text" name="quantity" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <label for="">Image of the Product:</label><span></span>
                    <input type="file" name="image" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <label for="">Description of Product:</label><span></span>
                    <input type="text" name="description" class="inputs" onChange={handleInput} required/>
                </div>
                <div class="form-group">
                    <button class="form-btn">
                        Submit Product
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewProduct