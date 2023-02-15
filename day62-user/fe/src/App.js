import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./component/LoginForm";
import Users from "./component/User";
import UserRegisterForm from "./component/UserRegisterForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h1>Day62 - User Login CRUD</h1>
      <h5>User register form</h5>
      <ToastContainer />

      <Routes>
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
