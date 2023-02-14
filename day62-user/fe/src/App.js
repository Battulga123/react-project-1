import { Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./component/User";
import UserRegisterForm from "./component/UserRegisterForm";

function App() {
  return (
    <div className="App">
      <h1>Day62 - User Login CRUD</h1>
      <h5>User register form</h5>

      <Routes>
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
