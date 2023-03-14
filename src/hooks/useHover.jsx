import { useState, useEffect, useRef } from "react";

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  function over() {
    setIsHovered(true);
  }
  function leave() {
    setIsHovered(false);
  }

  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.addEventListener("mouseover", over);
      myRef.current.addEventListener("mouseleave", leave);
    }

    return () => {
      if (myRef.current) {
        myRef.current.removeEventListener("mouseover", over);
        myRef.current.removeEventListener("mouseleave", leave);
      }
    };
  }, []);

  return [isHovered, myRef];
}
