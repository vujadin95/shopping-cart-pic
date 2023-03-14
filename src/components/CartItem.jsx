import React, { useContext, useState } from "react";
import { Context } from "../Context";

export default function CartItem({ cart }) {
  const { removePhotoFromCartItems } = useContext(Context);
  const [isHovered, setIsHovered] = useState(false);

  const trachClassName = isHovered ? "fill" : "line";

  return (
    <div className="cart-item">
      <i
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => removePhotoFromCartItems(cart.id)}
        className={`ri-delete-bin-${trachClassName}`}
      ></i>
      <img src={cart.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}
