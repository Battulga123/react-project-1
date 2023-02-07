import Book from "./Book";
import { BookContext, UserProvider } from "../contexts/BookContext";
import { useContext } from "react";

export default function Books() {
  const list = useContext(BookContext);
  return (
    <ul>
      {list.map((item, index) => {
        return <Book key={index} item={item} />;
      })}
    </ul>
  );
}
