import { useEffect } from "react";
import { useState } from "react";

export default function EX() {
  const [numbers, setNumbers] = useState;
  const array = [1, 2, 3, 4, 1];
  useEffect(() => {
    findNumberCount(array)
    console.log(numbers)
  }, [])
  console.log(findNumberCount(array));
  function filterNumbers(arr, number) {
    return arr.filter((a) => a === number);
  }

  function findNumberCount(arr) {
    for (let i = 0; i < 10; i++) {
      const result = filterNumbers(arr, i);
      const resultObject = {
        i: result,
      };
      setNumbers([...numbers, resultObject]);
    }
  }

  return <div></div>;
}
