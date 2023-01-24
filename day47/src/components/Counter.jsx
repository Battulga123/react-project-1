import { useState } from "react";

export default function Counter() {
  const [counter, Setcounter] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="counter"
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <p>{counter}</p>
      <br></br>
      <button onClick={() => Setcounter(counter + 1)}>Add one</button>
    </div>
  );
}
