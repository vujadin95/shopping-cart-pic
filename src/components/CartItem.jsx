import React, { useContext, useState } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

export default function CartItem({ cart }) {
  const { removePhotoFromCartItems } = useContext(Context);
  const [isHovered, myRef] = useHover();

  const trachClassName = isHovered ? "fill" : "line";

  return (
    <div className="cart-item">
      <i
        onClick={() => removePhotoFromCartItems(cart.id)}
        className={`ri-delete-bin-${trachClassName}`}
        ref={myRef}
      ></i>
      <img src={cart.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}
