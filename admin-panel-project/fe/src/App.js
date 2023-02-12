import "./App.css";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SideBar from "./components/SideBar";
import NewUser from "./pages/NewUser";

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newuser" element={<NewUser/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
