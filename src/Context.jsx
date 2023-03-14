import React, { useEffect, useState } from "react";

const Context = React.createContext();
const photosUrl =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function toggleFavorited(id) {
    setAllPhotos((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  }

  function addPhotoToCartItems(obj) {
    setCartItems((prevState) => [...prevState, obj]);
  }

  function removePhotoFromCartItems(id) {
    setCartItems((prevState) => prevState.filter((item) => item.id !== id));
  }

  useEffect(() => {
    fetch(`${photosUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorited,
        addPhotoToCartItems,
        cartItems,
        removePhotoFromCartItems,
        setCartItems,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
