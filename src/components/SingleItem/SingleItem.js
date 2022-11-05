import React from "react";

import './SingleItem.css'

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import { Link } from "react-router-dom";

const SingleItem = ({ current, addToCart }) => {
  return (
    // <div >
    //   <img

    //     src={current.image}
    //     alt={current.title}
    //   />
    //   <div >
    //     <p >{current.title}</p>
    //     <p >{current.description}</p>
    //     <p >$ {current.price}</p>
    //     <p >Test</p>
    //     <button
    //       onClick={() => addToCart(current.id)}

    //     >
    //       Add To Cart
    //     </button>
    //   </div>
    // </div>


    <div class="min-h-screen grid place-items-center font-mono ">
      <Link to='/'><button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-[#062c5e] focus:outline-none focus:shadow-outline">BACK</button></Link>
      <div class=" rounded-md bg-[#062c5e] shadow-lg">
        <div class="md:flex px-4 leading-none max-w-4xl">
          <div class="flex-none ">
            <img
              src={current.image}
              alt="pic"
              class="h-72 w-64 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
            />
          </div>

          <div class="flex-col text-gray-300">

            <p class="pt-4 text-2xl font-bold">{current.title}</p>
            <hr class="hr-text" data-content="" />
            <div class="text-md flex justify-between px-4 my-2">
              <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
              <span class="font-bold"></span>
            </div>
            <p class="hidden md:block px-4 my-4 text-sm text-left">{current.description} </p>

            <p class="flex text-md px-4 my-2 items-center">
              Current Price  <span className="text-2xl pl-4">${current.price}</span>
            </p>

            <div class="text-xs">
              <button onClick={() => addToCart(current.id)} type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Add To Cart</button>
              <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Cancle</button>


            </div>


          </div>
        </div>

      </div>
    </div>



  )
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
