import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { updateUser, createUser } from "./services/usersServices";
import { fetchAllData, deleteUser } from "./services/axiosUsersServices";

// npm install --save-dev nodemon
// npm nodemon

function App() {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    username: "",
    age: "",
  };

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);

  useEffect(() => {
    fetchAllData(URL, setUsers);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isUpdate) {
      updateUser(e, URL, setUsers);
    } else {
      createUser(
        currentUser,
        URL,
        setUsers,
        setIsUpdate,
        setCurrentUser,
        newUser
      );
    }
  }

  async function handleDelete(userId) {
    deleteUser(userId, URL, setUsers);
  }

  async function handleEdit(userId) {
    setIsUpdate(true);
    const filteredUser = users.filter((user) => user.id === userId)[0];
    if (filteredUser) {
      setCurrentUser({
        id: filteredUser.id,
        age: filteredUser.age,
        username: filteredUser.username,
      });
    }
  }

  function handleUserName(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    });
  }

  function handleUserAge(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value,
    });
  }

  return (
    <div className="App">
      <h1> Day52 - NodeJS FS Module</h1>
      <h5>Create User FORM</h5>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            name="username"
            value={currentUser.username}
            onChange={handleUserName}
          />
        </label>
        <br />
        <br />
        <label>
          Age:
          <input name="age" value={currentUser.age} onChange={handleUserAge} />
        </label>
        <br />
        <br />
        <button>{isUpdate ? "Update" : "Submit"}</button>
      </form>
      <h3>User List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user.username} : {user.age}{" "}
                <button onClick={() => handleDelete(user.id)}>Delete</button>{" "}
                <button onClick={() => handleEdit(user.id)}>Edit</button>
              </p>
            </div>
          );
        })}
    </div>
  );
}
export default App;
