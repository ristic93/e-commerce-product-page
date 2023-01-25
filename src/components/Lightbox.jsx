import React, { useState } from "react";
import closeIcon from "../assets/icon-close.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";

const Lightbox = ({ products, modal, toggleModal }) => {
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];

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
    <main
      className={`${
        modal ? "hidden" : "hidden md:block"
      } fixed bg-lightBlack top-0 bottom-0 left-0 right-0`}
    >
      <section className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col gap-[10px] w-[500px]">
        <article className="relative">
          <img
            src={mainImage}
            alt="sneakers-photo"
            className="rounded-xl cursor-pointer"
          />
          <img
            src={closeIcon}
            alt="close-icon"
            className="absolute -top-10 right-0 w-5 cursor-pointer hover:scale-[1.4]"
            onClick={toggleModal}
          />
          <img
            src={prevIcon}
            alt="prev-icon"
            className="bg-white p-4 rounded-full absolute top-[50%] -translate-y-[50%] -left-5 cursor-pointer hover:scale-[1.3] transition-all duration-300"
            onClick={previousSlide}
          />
          <img
            src={nextIcon}
            alt="next-icon"
            className="bg-white p-4 rounded-full absolute top-[50%] -translate-y-[50%] -right-5 cursor-pointer hover:scale-[1.3] transition-all duration-300"
            onClick={nextSlide}
          />
        </article>
        <article className="flex justify-around px-10 gap-[10px]">
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
                    idx === value && "opacity-90"
                  } w-full cursor-pointer rounded-xl ease-in-out duration-700 hover:scale-125 hover:opacity-80`}
                  src={item.thumbnail}
                  alt="product-photo"
                />
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
};

export default Lightbox;
