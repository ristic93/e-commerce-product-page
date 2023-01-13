import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [price, setPrice] = useState(125.0);
  const [itemCounter, setItemCounter] = useState(0);

  const [addInCart, setAddInCart] = useState(0);

  return (
    <CartContext.Provider
      value={{
        price,
        setPrice,
        itemCounter,
        setItemCounter,
        addInCart,
        setAddInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
