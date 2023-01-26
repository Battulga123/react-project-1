import { useEffect, useState } from "react";
import InputForm from "./component/InputFrom";
const GET_DATA_URL = "http://localhost:8080/data";
const DELETE_DATA_URL = "http://localhost:8080/data";

function App() {
  const [data, setData] = useState([]);
  const [isloaded, setIsLoaded] = useState(false);

  async function fetchData() {
    const FETCHED_DATA = await fetch(GET_DATA_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }

  async function deleteData(data) {
    const options = {
      method: "Delete",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(DELETE_DATA_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }

  function handleDelete(id) {
    const data = {
      id: id,
    };
    deleteData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Day-51 - React/Express Fullstack APP - without Database</h1>
      <InputForm
        isloaded={isloaded}
        setIsLoaded={setIsLoaded}
        setData={setData}
      />

      {isloaded
        ? "...Loading"
        : data &&
          data.map((d, index) => {
            return (
              <div>
                <p key={index}>
                  {d.name} -- {d.major}
                </p>
                <button onClick={() => handleDelete(d.id)}>Delete</button>
              </div>
            );
          })}
    </div>
  );
}

export default App;
