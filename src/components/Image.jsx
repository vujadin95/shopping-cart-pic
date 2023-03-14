import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

function Image({ className, img }) {
  const [isHovered, setIsHovered] = useState(false);

  const {
    toggleFavorited,
    addPhotoToCartItems,
    cartItems,
    removePhotoFromCartItems,
  } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorited(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          onClick={() => toggleFavorited(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }

  function plusIcon() {
    const isInCartItems = cartItems.find((item) => item.id === img.id);
    if (isInCartItems) {
      return (
        <i
          onClick={() => removePhotoFromCartItems(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          onClick={() => addPhotoToCartItems(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} image-container`}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {plusIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    url: PropTypes.string,
  }),
};

export default Image;
