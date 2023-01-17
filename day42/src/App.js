
import { useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  function handleRegister(e) {
    e.preventDefault()
    const user = {
      firstname: e.target.firstname.value, 
      lastname: e.target.lastname.value,
      password: e.target.password.value,
      confirm: e.target.confirm.value,
    }

    console.log(user)

    setUsers([...users, user])
    console.log(users)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleRegister}>
          <label>Firsname:</label>
          <input name='firstname'></input>
          <br></br>
          <label>Lastname:</label>
          <input name='lastname'></input>
          <br></br>
          <label>Password:</label>
          <input name='password'></input>
          <br></br>
          <label>Confitm Password:</label>
          <input name='confirm'></input>
          <br></br>
          <button> Register</button>
        </form>
        <h2> User Preview</h2>
        {users.map (u => {
          return (
            <div>
              <div>{u.firstname}</div>
              <div>{u.lastname}</div>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
