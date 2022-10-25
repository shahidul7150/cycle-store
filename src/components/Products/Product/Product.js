import React from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { HiStar } from "react-icons/hi";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="shadow-xl" >
      <img

        src={product.image}
        alt={product.title}
      />

      <div className="p-3">
        <div className="flex justify-between items-center">
          <h1 className=" text-lg font-semibold" >{product.title.slice(0, 20)}</h1>
          <AiOutlineHeart />
        </div>
        <p className="text-md ">{product.description.slice(0, 50)}</p>
        <div className="flex text-orange-500">
          <p><HiStar /></p>
          <p><HiStar /></p>
          <p><HiStar /></p>
          <p><HiStar /></p>
          <p className="text-gray-300"><HiStar /></p>
        </div>
        <p >$ {product.price}</p>

      </div>

      <div className="p-3 flex justify-between">
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className="bg-[#062c5e] py-1 px-2 text-white"
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(product.id)}

        >
          <MdAddShoppingCart />
        </button>
      </div>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
