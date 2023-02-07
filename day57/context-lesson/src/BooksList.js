import Books from "./components/Books";
import { BookContextProvider } from "./contexts/BookContext";
import { DATA } from "./data/data";

export default function BookList() {
  return (
    <div>
      <BookContextProvider>
        <Books />
      </BookContextProvider>
    </div>
  );
}
