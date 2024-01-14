import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [post, setPost] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const dataCart = localStorage.getItem("costcoCart");

  const grandTotal = [...cart]
    .map(({ totalPrice }) => totalPrice)
    .reduce((total, initial) => {
      return total + initial;
    }, 0);
  const getPost = () => {
    fetch('http://159.65.21.42:9000/products')
      .then((resp) => resp.json())
      .then((data) => setPost(data));
  };
  const getProduct = () => {
    fetch('http://159.65.21.42:9000/products')
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  };
  const activateCart = () => {
    if (dataCart) {
      let cartData = JSON.parse(dataCart);
      setCart(cartData);
    }
  };
  const addToCart = (item) => {
    let initialCartData = [...cart];
    let checkItem = initialCartData.find((cart_item) => cart_item._id === item._id);
    if (checkItem) {
      alert("Item already in cart");
    } else {
      let newCartItem = { ...item, quantity: 1, totalPrice: item.price };
      initialCartData.push(newCartItem);
      setCart(initialCartData);
      localStorage.setItem("costcoCart", JSON.stringify(initialCartData));
      alert("Item has been added to cart");
    }
  };
  const increaseQty = (item) => {
    let initialCartData = [...cart];
    initialCartData.map((cart_item) => {
      if (cart_item._id === item._id) {
        cart_item.quantity += 1;
        cart_item.totalPrice = cart_item.price * cart_item.quantity;
      }
      return cart_item;
    });
    setCart(initialCartData);
    localStorage.setItem("costcoCart", JSON.stringify(initialCartData));
  };
  const decreaseQty = (item) => {
    let initialCartData = [...cart];
    initialCartData.map((cart_item) => {
      if (cart_item._id === item._id) {
        if (cart_item.quantity > 1) {
          cart_item.quantity -= 1;
          cart_item.totalPrice = cart_item.price * cart_item.quantity;
        }
      }
      return cart_item;
    });
    setCart(initialCartData);
    localStorage.setItem("costcoCart", JSON.stringify(initialCartData));
  };
  const deleteCartItem = (item) => {
    let initialCartData = [...cart];
    let cartItems = initialCartData.filter((cart_item) => cart_item._id !== item._id);
    setCart(cartItems);
    localStorage.setItem("costcoCart", JSON.stringify(cartItems));
  };

  useEffect(() => {
    getProduct();
    activateCart();
  }, []);

  return (
    <DataContext.Provider
      value={{
        post,
        cart,
        setCart,
        getPost,
        setPost,
        products,
        addToCart,
        grandTotal,
        increaseQty,
        decreaseQty,
        deleteCartItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
