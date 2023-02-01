import "./App.css";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
