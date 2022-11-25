import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const context = createContext();

export default function CartContext({ children }) {
  const userCart = JSON.parse(localStorage.getItem("userCart")) || [];
  const [cart, setCart] = useState(userCart);
  const [itemsAmount, setItemsAmount] = useState(0);

  useEffect(() => {
    localStorage.setItem("userCart", JSON.stringify(cart));
    setItemsAmount(cart.reduce((acc, { quantity }) => acc + parseInt(quantity), 0));
  }, [cart]);

  function posInCart(isbn) {
    const pos = cart.findIndex((item) => item.isbn === isbn);
    return pos;
  }

  function addItem(product, stock) {
    const pos = posInCart(product.isbn);
    if (pos === -1) {
      setCart([...cart, product]);
    } else if (cart[pos].quantity + product.quantity > stock) {
      //IF USER IS TRYING TO BUY A QUANTITY MAYOR THAN STOCK, give FALSE to throw a Sweet Alert Error on ItemDetail.jsx
      Swal.fire({
        title: "Error!",
        text: "Item quantity exceeds stock availability",
        icon: "error",
        confirmButtonText: "OK",
      });
      return false;
    } else {
      const cartAux = [...cart];
      cartAux[pos].quantity = cartAux[pos].quantity + product.quantity;
      setCart(cartAux);
    }
    return true;
  }

  function removeItem(isbn) {
    setCart(cart.filter((product) => product.isbn !== isbn));
  }

  function clearCart() {
    setCart([]);
  }

  // function isInCart(isbn) {
  //   return cart.some((element) => element === isbn);
  // }
  return <context.Provider value={{ cart, addItem, removeItem, clearCart, itemsAmount }}>{children}</context.Provider>;
}
