import { useState } from "react";
import { useEffect } from "react";

export default function Anime() {
  
  const[count, setCount] = useState(0)
  
    useEffect(() => {
    console.log("My component");
    setCount(count + 1)
  }, []);

  function handleClick(e) {
    console.log('clicked');
  }
  return (
    <div>
      <h1>Dat48: Use effect with Anime</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Anime click
      </button>
    </div>
  );
}
