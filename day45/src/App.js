import "./App.css";
import Accordian from "./components/Accordian";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <h1>Day45: </h1>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
