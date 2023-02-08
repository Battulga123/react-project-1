import { useContext } from "react";
import { ImageContext } from "../contexts/ImageContext";
import { getImageUrl } from "../utils";

export default function PlaceImage({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    ></img>
  );
}
