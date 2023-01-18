import { Toast } from "bootstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loginName: "Tulgaa@gmail.com",
    password: "123456",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);

    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast("user is permitted");
      navigate("/", { replace: true, state: { bookName: "Fake Title" } });
    } else {
      toast("user is not permitted");
      navigate("/register", { replace: true, state: { bookName: "Fake Title" } });
    }
  };

  return (
    <div>
        <Header/>
        <h1>Its login page</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Login Name</label>
        <input name="username" type="email"></input>
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input name="password" type="password"></input>
        <button>Sign in</button>
      </form>
      <ToastContainer />
    </div>
  );
}
