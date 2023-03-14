import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

export default function Cart() {
  const [isOrdered, setIsOrdered] = useState(false);
  const { cartItems, setCartItems } = useContext(Context);
  const cartItemsElement = cartItems.map((cart) => (
    <CartItem key={cart.id} cart={cart} />
  ));

  const totalCost = cartItems.length * 5.99;
  const displayTotalCost = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleOrder() {
    setIsOrdered(true);
    setTimeout(() => {
      console.log("Ordered!");
      setCartItems([]);
      setIsOrdered(false);
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemsElement}
      <p className="total-cost">Total: {displayTotalCost}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={handleOrder}>
            {isOrdered ? "Ordering..." : "Place Order"}
          </button>
        ) : (
          <p>You have no items in your cart.</p>
        )}
      </div>
    </main>
  );
}
