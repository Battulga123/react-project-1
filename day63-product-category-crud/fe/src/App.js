import { Route, Routes } from "react-router-dom";
import Categories from "./component/Categgories";
import CategoryForm from "./component/CategoryForm";

function App() {
  return (
    <div className="App">
      <h1>Day63</h1>

      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit/:id" element={null} />
        <Route path="/category/delete/:id" element={null} />
      </Routes>
    </div>
  );
}

export default App;
