import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Categories from "./component/Categgories";
import CategoryForm from "./component/CategoryForm";
import CategoryEditForm from "./component/CategoryEditForm";

function App() {
  return (
    <div className="App">
      <h1>Day63</h1>

      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit/:id" element={<CategoryEditForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
