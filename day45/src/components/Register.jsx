import { useState } from "react";
import { navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Register() {
  
    const navigate = useNavigate()
    const [formSumbmitted, setFormSubmitted] = useState(false)
    
    if(formSumbmitted) {
        return <navigate to={'/login'}/>
    }
    

    
    const handleSubmit = function (event) {
        event.preventDefault()
        setFormSubmitted(true)

    }
  
    return (
    <div>
        <Header/>
      <h1>Its register page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Login Name</label>
        <input name="username" type="email"></input>
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input name="password" type="password"></input>
        <br />
        <br />
         <button>Register</button>
      </form>
    </div>
  );
}
