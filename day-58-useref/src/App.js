import "./App.css";
import PlaceImage from "./components/PlaceImage";
import { useContext, useState } from "react";
import List from "./components/List";
import { ImageContext, ImageContextProvider } from "./contexts/ImageContext";

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);

  return (
    <div className="App">
      <label>use large images</label>
      <input
        type="checkbox"
        checked={isLarge}
        onChange={() => setIsLarge(!isLarge)}
      ></input>
      <hr></hr>
      <List />
    </div>
  );
}

export default App;
