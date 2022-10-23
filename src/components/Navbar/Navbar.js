import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    // <div className="flex justify-between bg-cyan-600 px-12">
    //   <Link to="/">
    //     <h2 >Store</h2>
    //   </Link>
    //   <Link to="/cart">
    //     <div className="flex jusi" >
    //       <h3>Cart</h3>
    //       <FcShop />
    //       <div >{cartCount}</div>
    //     </div>
    //   </Link>

    // </div>

    <div className="md:px-12">
      <a className="btn btn-ghost normal-case text-xl pl-0">daisyUI</a>
      <div className=" flex lg:flex-row-reverse text-white  ">

        <div className="navbar-start">

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/cart">
                  <div className="flex jusi" >
                    <h3>Cart</h3>
                    <FcShop />
                    <div >{cartCount}</div>
                  </div>
                </Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>

        </div>
        <div className="navbar-start w-[100%] hidden lg:flex">
          <ul className="menu menu-horizontal p-0 ">
            <li >
              <Link to='/' className="py-0 pl-0">Home</Link>
            </li>
            <li >
              <Link to='/' className="py-0">Store</Link>
            </li>
            <li >
              <Link to='/' className="py-0">About</Link>
            </li>
            <li >
              <Link to='/' className="py-0">Contact</Link>
            </li>
            <li className="lg:ml-32">
              <Link className="py-0" to="/cart">
                <div className="flex jusi" >
                  <h3>Cart</h3>
                  <FcShop />
                  <div >{cartCount}</div>
                </div>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
