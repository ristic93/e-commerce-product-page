import React from "react";
import cartIcon from "../assets/icon-cart.svg/";

const Button = () => {
  return (
    <div>
      <button className="flex items-center justify-center gap-4 bg-orange py-2 px-4 text-white font-[700] rounded-lg mt-5 w-full lg:mt-0 hover:opacity-80 ease-in-out duration-300">
        <img src={cartIcon} alt="cart" /> Add to cart
      </button>
    </div>
  );
};

export default Button;
