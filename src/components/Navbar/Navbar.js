import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { FcShop } from "react-icons/fc";
import { IoMdMenu, IoCart, IoMdCart } from "react-icons/io";

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
      <a className="btn btn-ghost normal-case text-2xl font-extrabold pl-0">Rider Store</a>
      <div className=" flex lg:flex-row-reverse text-white  ">

        <div className="navbar-start">

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
              <IoMdMenu className="text-2xl" />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#579df84f] rounded-box w-52">
              <li>
                <Link to="/cart">
                  <div className="flex jusi" >
                    <h3>Cart</h3>
                    <IoMdCart />
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
                  <li><a>Submenu</a></li>
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
            <li className="lg:ml-32 relative hover:text-red-300">
              <Link className="py-0" to="/cart">
                <div className="flex absolute " >
                  <IoMdCart className="" />
                  <div className="text-xs font-bold absolute -top-3 left-3  bg-white w-4 h-4 rounded-full flex justify-center items-center text-[#062c5e] " >{cartCount}</div>
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
