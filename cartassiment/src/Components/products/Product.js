import React, { useState, Component } from "react";
import "./Product.css";

function ProductsTwo(props) {
  const [cartData, setCartData] = useState({
    cart: 0,
    products: [
      {
        id: 101,
        name: "product 1",
        quantity: 0,
      },
      {
        id: 102,
        name: "product 2",
        quantity: 0,
      },
      {
        id: 103,
        name: "product 3",
        quantity: 0,
      },
    ],
  });

  return (
    <div>
      {cartData.products.length != 0 ? (
        <div>
          <button className="btn info">Cart : {cartData.cart}</button>
          {cartData.products.map((item) => {
            return (
              <div>
                <h3 className="cart1">{item.name}</h3>
                <br />
                <div className="cart3">
                  <button className="button">
                    <a href="#">{item.quantity}</a>
                  </button>
                  <br />
                </div>
                <div className="cart2">
                  <button
                    className="btn1 info"
                    onClick={() => {
                      increaseQuantity(item.id);
                    }}
                  >
                    <a href="#">ADD</a>
                  </button>

                  <button
                    className="btn2 info"
                    onClick={() => {
                      removeQuantity(item.id);
                    }}
                  >
                    <a href="#"> Remove</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Product list is empty</h1>
      )}
    </div>
  );

  function increaseQuantity(id) {
    let newList = [...cartData.products];
    let newCart = cartData.cart;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id == id) {
        newList[i].quantity += 1;
        newCart += 1;
      }
    }
    setCartData({ cart: newCart, products: newList });
  }
  function removeQuantity(id) {
    let newList = [...cartData.products];
    let newCart = cartData.cart;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id == id) {
        newList[i].quantity -= 1;
        newCart -= 1;
      }
    }
    setCartData({ cart: newCart, products: newList });
  }
}

export default ProductsTwo;
