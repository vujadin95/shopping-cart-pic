import React, { useEffect, useState } from "react";

const Context = React.createContext();
const photosUrl =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    fetch(`${photosUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  return (
    <Context.Provider value={{ allPhotos }}>{props.children}</Context.Provider>
  );
}

export { ContextProvider, Context };
