import React, { useState } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <nav className="w-[90%] py-[25px] mx-auto md:border-b-2 flex justify-between items-center relative">
        <div className="flex items-center justify-start space-x-12">
          <img
            src={menu}
            alt="hamburger"
            onClick={() => setToggle((prev) => !prev)}
            className="md:hidden w-[20px]"
          />

          <img src={logo} alt="logo" className="cursor-pointer" />

          <ul className="hidden lg:flex align-center space-x-10">
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

        <div className="flex items-center justify-start gap-8">
          <a href="">
            <img src={cart} alt="cart" />
          </a>
          <img
            src={avatar}
            alt="avatar"
            className="w-12 border-transparent border-[4px] hover:border-orange hover:border-[4px] rounded-3xl cursor-pointer ease-in-out duration-300"
          />
        </div>
      </nav>

      <ul
        className={`${
          toggle ? "flex flex-col" : "hidden"
        }  md:hidden bg-white fixed top-0 bottom-0 left-0 w-[50%] pt-[40px] px-8 space-y-6 text-[18px]`}
      >
        <img
          src={close}
          alt="hamburger"
          onClick={() => setToggle((prev) => !prev)}
          className="md:hidden w-[20px]"
        />
        <li>
          <a href="#" className="font-bold hover:text-darkGrayishBlue transition-all duration-300">
            Collection
          </a>
        </li>
        <li>
          <a href="#" className="font-bold hover:text-darkGrayishBlue transition-all duration-300">
            Men
          </a>
        </li>
        <li>
          <a href="#" className="font-bold hover:text-darkGrayishBlue transition-all duration-300">
            Women
          </a>
        </li>
        <li>
          <a href="#" className="font-bold hover:text-darkGrayishBlue transition-all duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="font-bold hover:text-darkGrayishBlue transition-all duration-300">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
