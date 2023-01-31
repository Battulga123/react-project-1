import "./App.css";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import ClippedDrawer from "./components/SideBar";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
