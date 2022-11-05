import React, { useState } from "react";


import { connect } from "react-redux";

import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);
  const [quantity, setQuantity] = useState(1)

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };


  return (
    // <div >
    //   <img

    //     src={item.image}
    //     alt={item.title}
    //   />
    //   <div >
    //     <p >{item.title}</p>
    //     <p >{item.description}</p>
    //     <p >$ {item.price}</p>
    //   </div>
    //   <div >
    //     <div >
    //       <label htmlFor="qty">Qty</label>
    //       <input
    //         min="1"
    //         type="number"
    //         id="qty"
    //         name="qty"
    //         value={input}
    //         onChange={onChangeHandler}
    //       />
    //     </div>
    //     <button
    //       onClick={() => removeFromCart(item.id)}

    //     >
    //       <img
    //         src="https://image.flaticon.com/icons/svg/709/709519.svg"
    //         alt=""
    //       />
    //     </button>
    //   </div>
    // </div>



    <div class="my-12 w-full grid place-items-center font-mono ">

      <div class=" rounded-md bg-[#062c5e] shadow-lg">
        <div class="md:flex px-4 leading-none max-w-4xl">
          <div class="flex-none pr-5 ">
            <img
              src={item.image}
              alt="pic"
              class="h-60 min-w-60 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
            />
          </div>

          <div class="flex-col text-gray-300">

            <p class="pt-4 text-2xl font-bold">{item.title}</p>
            <hr class="hr-text" data-content="" />
            <div class="text-md flex justify-between px-4 my-2">
              <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
              <span class="font-bold"></span>
            </div>
            <p class="hidden md:block px-4 my-4 text-sm text-left">{item.description} </p>

            <p class="flex text-md px-4 my-2 items-center">
              Current Price  <span className="text-2xl pl-4">${item.price}</span>
            </p>

            <div class="text-xs">
              {/* <div >
                <label htmlFor="qty">Qty</label>
                <input
                  min="1"
                  type="number"
                  id="qty"
                  name="qty"
                  value={input}
                  onChange={onChangeHandler}
                />
              </div> */}


              <div
                class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none"
              >
                <label htmlFor="qty">Qty</label>
                <input
                  className="outline-none px-2"
                  min="1"
                  type="number"
                  id="qty"
                  name="qty"
                  value={input}
                  onChange={onChangeHandler}
                />

              </div>



              <button onClick={() => removeFromCart(item.id)} type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Remove</button>


            </div>


          </div>
        </div>

      </div>
    </div>


  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
