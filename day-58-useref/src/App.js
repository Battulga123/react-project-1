import "./App.css";
import PlaceImage from "./components/PlaceImage";
import { useContext, useState } from "react";
import List from "./components/List";
import { ImageContext, ImageContextProvider } from "./contexts/ImageContext";
import StopWatch from "./components/StopWatch"
import InputFocus from "./components/InputFocus";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  // const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);

  return (
    <div className="App">
      {/* <label>use large images</label>
      <input
        type="checkbox"
        checked={isLarge}
        onChange={() => setIsLarge(!isLarge)}
      ></input>
      <hr></hr>
      <List /> */}
      <StopWatch/>

      <br></br>
      <InputFocus/>

      <br></br>

      <VideoPlayer/>

     
    </div>
  );
}

export default App;
