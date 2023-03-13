import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

export default function Photos() {
  const { allPhotos } = useContext(Context);
  const displayPhotos = allPhotos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)} />
  ));
  return <main className="photos">{displayPhotos}</main>;
}
