import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import thumb1 from "../assets/image-product-1-thumbnail.jpg";
import remove from "../assets/icon-delete.svg";
import { Button } from "../common/Button";
import CartContext from "../context/CartContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleCart, setToggleCart] = useState(true);

  const { price, addInCart, setAddInCart } = useContext(CartContext);

  const fixedPrice = price.toFixed(2);
  const totalPrice = fixedPrice * addInCart;

  const removeItem = () => {
    if (addInCart > 0) {
      setAddInCart(0);
    }
  };

  return (
    <>
      <nav className="w-[90%] py-[24px] mx-auto md:border-b-2 flex justify-between items-center">
        <div className="flex justify-start items-center relative">
          {/* toggle hamburger */}

          <img
            src={menu}
            alt="hamburger"
            onClick={() => setToggle((prev) => !prev)}
            className="lg:hidden w-[20px] cursor-pointer"
          />

          <img src={logo} alt="logo" className="cursor-pointer pl-4 lg" />

          <ul className="hidden lg:flex align-center space-x-10 pl-10">
            <li>
              <a
                href=""
                className="text-darkGrayishBlue pb-8 hover:border-orange hover:border-b-[6px] hover:text-black ease-in-out duration-300"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-darkGrayishBlue pb-8 hover:border-orange hover:border-b-[6px] hover:text-black ease-in-out duration-300"
              >
                Men
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-darkGrayishBlue pb-8 hover:border-orange hover:border-b-[6px] hover:text-black ease-in-out duration-300"
              >
                Women
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-darkGrayishBlue pb-8 hover:border-orange hover:border-b-[6px] hover:text-black ease-in-out duration-300"
              >
                About
              </a>
            </li>
            <li className="mr-[40px]">
              <a
                href=""
                className="text-darkGrayishBlue pb-8 hover:border-orange hover:border-b-[6px] hover:text-black ease-in-out duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* toggle cart */}

        <div className="flex items-center justify-start gap-8 relative">
          {addInCart > 0 ? (
            <span className="bg-orange px-2 text-[10px] font-bold rounded-[12px] text-white absolute left-3 top-2">
              {addInCart}
            </span>
          ) : (
            <span></span>
          )}
          <img
            src={cart}
            alt="cart"
            onClick={() => setToggleCart((prev) => !prev)}
            className="cursor-pointer"
          />
          <img
            src={avatar}
            alt="avatar"
            className="w-12 border-transparent border-[4px] hover:border-orange hover:border-[4px] rounded-3xl cursor-pointer ease-in-out duration-300"
          />
        </div>

        {/* cart menu */}

        {addInCart > 0 ? (
          <div
            className={`${
              toggleCart ? "hidden" : "visible"
            } w-[350px] bg-white shadow-2xl border-2 rounded-lg py-4 absolute top-20 right-3 md:right-16 px-5 z-30`}
          >
            <p className="pl-5 -mx-5 font-[700]">Cart</p>
            <hr className="my-4 bg-lightGrayishBlue h-1" />
            <div className="flex justify-between mb-4">
              <img
                src={thumb1}
                alt="cart-img"
                className="w-[50px] rounded-lg "
              />
              <div className="">
                <p className="text-darkGrayishBlue">
                  Fall limited edition sneakers
                </p>
                <span className="text-darkGrayishBlue mr-2">${fixedPrice}</span>
                <span className="text-darkGrayishBlue mr-2">x</span>
                <span className="text-darkGrayishBlue mr-2">{addInCart}</span>
                <span className="font-[700]">${totalPrice}</span>
              </div>
              <div className="flex items-center scale-[1.2] hover:scale-[1.6] cursor-pointer transition-all duration-300">
                <img src={remove} alt="" onClick={removeItem} />
              </div>
            </div>
            <Button>Check out</Button>
          </div>
        ) : (
          <div
            className={`${
              toggleCart ? "hidden" : "visible"
            } w-[350px] bg-white shadow-2xl border-2 rounded-lg py-4 absolute top-20 right-3 md:right-16 px-5 z-30`}
          >
            <p className="pl-5 -mx-5 font-[700]">Cart</p>
            <hr className="my-4 bg-lightGrayishBlue h-1" />
            <p className="text-center font-bold text-darkGrayishBlue py-10">
              Your cart is empty.
            </p>
          </div>
        )}
      </nav>

      {/* hamburger menu */}

      <ul
        className={`${
          toggle ? "flex flex-col" : "hidden"
        }  lg:hidden bg-white fixed top-0 bottom-0 left-0 w-[60%] pt-[40px] px-8 space-y-6 text-[18px] z-30`}
      >
        <img
          src={close}
          alt="hamburger"
          onClick={() => setToggle((prev) => !prev)}
          className="lg:hidden w-[20px] cursor-pointer"
        />
        <li>
          <a
            href="#"
            className="font-bold hover:text-darkGrayishBlue transition-all duration-300"
          >
            Collection
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-bold hover:text-darkGrayishBlue transition-all duration-300"
          >
            Men
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-bold hover:text-darkGrayishBlue transition-all duration-300"
          >
            Women
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-bold hover:text-darkGrayishBlue transition-all duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-bold hover:text-darkGrayishBlue transition-all duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
