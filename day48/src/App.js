import logo from "./logo.svg";
import "./App.css";
import Input from "./components/input";
import { useState } from "react";
import Anime from "./components/Anime";
import Button from "./components/Button";
import TopAnime from "./components/TopAnime";
import EX from "./components/EX";

function App() {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <Input label="first input" value={text} onChange={handleChange} />
        <Input label="second input" value={text} onChange={handleChange} />
      </div>
      <EX/>
      {/* <Anime/>
      <Button/>
      <TopAnime/> */}
   
    </div>
  );
}

export default App;
