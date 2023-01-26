export default function InputForm({ isloaded, setIsLoaded, setData }) {
  const POST_DATA_URL = "http://localhost:8080/data";

  async function postData(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    console.log(data);
    const FETCHED_DATA = await fetch(POST_DATA_URL, options);
    const FETCGED_JSON= await FETCHED_DATA.json()
    setData(FETCGED_JSON)
    if (FETCHED_DATA) {
      setIsLoaded(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.name.value);
    console.log(e.target.major.value);
    const data = {
      name: e.target.name.value,
      major: e.target.major.value,
    };
    setIsLoaded(true);
    postData(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input placeholder="Name" name="name"></input>
        </label>
        <br></br>
        <label>
          Major
          <input placeholder="Major" name="major"></input>
        </label>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}
