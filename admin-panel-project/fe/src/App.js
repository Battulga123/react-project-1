import "./App.css";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SideBar from "./components/SideBar";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newproduct" element={<NewProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
