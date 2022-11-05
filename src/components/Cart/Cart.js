import React, { useState, useEffect } from "react";
// import styles from "./Cart.module.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div >
      <Link to='/'><button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#062c5e] focus:outline-none focus:shadow-outline">BACK</button></Link>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <h4 className="text-2xl font-bold">Cart Summary</h4>
        <div className="flex items-center justify-center" >
          <span className="text-lg font-bold">TOTAL: ({totalItems} items)</span>
          <span className="text-2xl font-bold pl-3"> ${totalPrice}</span>
        </div>
        <Link to='/'><button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none bg-[#062c5e] focus:outline-none focus:shadow-outline">         Proceed To Checkout</button></Link>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
