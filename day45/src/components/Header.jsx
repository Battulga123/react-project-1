import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeIndex, setactiveIndex] = useState(false);

  return (
    <div>
      <h1>Its header page</h1>
      <nav>
        <Link
          to="/login"
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => {
            setactiveIndex(0);
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => {
            setactiveIndex(1);
          }}
        >
          Register
        </Link>
        <Link
          to="/accordian"
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => {
            setactiveIndex(2);
          }}
        >
          Accordian
        </Link>
      </nav>
    </div>
  );
}
