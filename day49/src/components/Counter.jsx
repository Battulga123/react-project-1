import { useState } from "react";

export default function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);
  
  let className = 'counter'
  if (hover) {
    className += 'hover'
  }
  if(isFancy) {
    className += 'fancy'
  }
  
  return (
    <div className={className}
    onPointerEnter = {()=> setHover(true)}
    onPointerleave = {() => setHover(false)}>
     
        <h3>{score}</h3>
        <button onClick={() => setScore(score + 1)}>Add one</button>

    </div>
  );
}
