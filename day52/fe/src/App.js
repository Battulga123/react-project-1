import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const URL = "http://localhost:8080/users";
  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      username: e.target.username.value,
      age: e.target.age.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleDelete (userId) {
    const options= {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        userId: userId
      })
    }
    const FETCHED_DATA = await fetch(URL,options)
    const FETCHED_JSON= await FETCHED_DATA.json()
    setUsers(FETCHED_JSON.data)

  }

  async function handleEdit (userId) {
   
    const options = {
      method: 'EDIT',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        userId: userId
      })
    }

    const FETCHED_DATA = await fetch(URL)
    const FETCHED_JSON= await FETCHED_DATA.json()
    setUsers(FETCHED_JSON.data) 

  }

  return (
    <div className="App">
      <h1> Day52 - NodeJS FS Module</h1>
      <h5>Create User FORM</h5>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input name="username" />
        </label>
        <br />
        <br />
        <label>
          Age:
          <input name="age" />
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <h3>User List</h3>
      {users &&
        users.map((user) => {
          return (
            <div>
              <p>
                {user.username} : {user.age}
                {" "}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                {" "}
                <button onClick={()=> handleEdit(user.id)}>Edit</button>
              </p>
            </div>
          );
        })}
    </div>
  );
}
export default App;
