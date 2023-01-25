import React, { useContext, useState } from "react";
import { data } from "../constants/data";
import minus from "../assets/icon-minus.svg/";
import plus from "../assets/icon-plus.svg/";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
import { Button } from "../common/Button";
import cartIcon from "../assets/icon-cart.svg/";
import CartContext from "../context/CartContext";
import Lightbox from "./Lightbox";

const Product = () => {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [modal, setModal] = useState(true);

  const { mainImage } = products[value];

  const { price, itemCounter, setItemCounter, setAddInCart } =
    useContext(CartContext);
  const fixedPrice = price.toFixed(2);

  const handleMinus = () => {
    setItemCounter(itemCounter - 1);
    if (itemCounter <= 0) {
      setItemCounter(0);
    }
  };

  const addedInCart = () => {
    if (itemCounter > 0) {
      setAddInCart((prev) => prev + itemCounter);
    }
    setItemCounter(0);
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const previousSlide = () => {
    if (value === 0) {
      setValue(value);
    } else {
      setValue((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (value === products.length - 1) {
      setValue(products.length - 1);
    } else {
      setValue((prev) => prev + 1);
    }
  };


  return (
    <main className="w-[100%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:py-10">
      <article className="flex flex-col gap-6">
        <div className="overflow-hidden lg:rounded-2xl">
          <img
            className="cursor-pointer w-full mx-auto h-[350px] md:h-[500px] lg:rounded-2xl"
            src={mainImage}
            alt="sneakers-photo"
            onClick={toggleModal}
          />
           <img
            src={prevIcon}
            alt="prev-icon"
            className="bg-white p-4 rounded-full absolute top-[50%] -translate-y-[50%] left-5 cursor-pointer hover:scale-[1.1] transition-all duration-300 lg:hidden"
            onClick={previousSlide}
          />
          <img
            src={nextIcon}
            alt="next-icon"
            className="bg-white p-4 rounded-full absolute top-[50%] -translate-y-[50%] right-5 cursor-pointer hover:scale-[1.1] transition-all duration-300 lg:hidden"
            onClick={nextSlide}
          />
        </div>
        <div className="hidden lg:flex justify-between max-w-xl">
          {products.map((item, idx) => {
            return (
              <div
                key={item.id}
                onClick={() => setValue(idx)}
                className={`${
                  idx === value && "border-[4px] border-orange"
                } border-[4px] border-transparent rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img
                  className={`${
                    idx === value && "border-orange opacity-40"
                  } w-full cursor-pointer rounded-xl ease-in-out duration-700 hover:scale-125 hover:opacity-50`}
                  src={item.thumbnail}
                  alt="product-photo"
                />
              </div>
            );
          })}
        </div>
      </article>

      <Lightbox products={products} modal={modal} toggleModal={toggleModal} value={value} setValue={setValue}/>

      <article className="py-[40px] px-10">
        <h2 className="text-orange uppercase font-[700] tracking-wide mb-10">
          Sneaker company
        </h2>
        <h1 className="text-slate capitalize font-[700] text-4xl mb-10">
          Fall limited edition <br /> sneakers
        </h1>
        <p className="text-darkGrayishBlue leading-relaxed mb-10">
          These low-profile sneakers are your perfect casual wear <br />
          companion. Featuring a durable rubber outer sole, they'll <br />
          withstand everything the weather can offer.
        </p>

        <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
          <ul className="flex items-center gap-5">
            <li className="font-[700] text-3xl">${fixedPrice}</li>
            <li className="bg-paleOrange text-orange font-[700] py-1 px-2 rounded-lg hover:scale-[1.5] ease-in-out duration-700 cursor-help">
              50%
            </li>
          </ul>

          <p className="text-grayishBlue line-through font-[700]">$250.00</p>
        </div>

        <div className="mt-10 lg:flex items-center justify-between gap-2">
          <ul className="flex items-center justify-between bg-lightGrayishBlue py-2 px-4 rounded shadow lg:flex-1">
            <li
              onClick={handleMinus}
              className="hover:opacity-60 cursor-pointer"
            >
              <img src={minus} alt="" className="hover:scale-[1.4] w-[15px]" />
            </li>
            <li className="font-[700]">{itemCounter}</li>
            <li
              onClick={() => setItemCounter(itemCounter + 1)}
              className="hover:opacity-60 cursor-pointer"
            >
              <img src={plus} alt="" className="hover:scale-[1.4] w-[15px]" />
            </li>
          </ul>

          <div className="lg:flex-1">
            <Button onClick={addedInCart}>
              <img src={cartIcon} alt="cart" /> Add to cart
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Product;
