import logo from "./logo.svg";
import "./App.css";

function App() {
  const promise = new Promise(function executor(resolve, reject) {
    // Fulfill the promise with value '42' after 100 ms.
    setTimeout(() => resolve(42), 100);
  });

  promise.then((value) => {
    value;
  });

  return (
    <div className="App">
      <h1>From Home</h1>
    </div>
  );
}

export default App;
