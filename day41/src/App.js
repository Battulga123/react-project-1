
import './App.css';
import { useState } from 'react'
import Counter from './components/Counter';
import UpdateArrays from './components/UpdateArrays';
import List from './components/SpreadArray';
import UpdatingObjects from './components/UpdatingObjects';

function App() {

  const [index, setIndex] = useState(0)
  const handleClick = () => { setIndex(index + 1) }




  const [inputText, setInputText] = useState(0)
  const handleInput = function (event) {
    setInputText(event.target.value)
  }


  return (
    <div className="App">
      <header className="App-header">

        <div>
          <h1>Day41: Exercise</h1>
          <input value={index}></input>
          <button onClick={handleClick}>Click me</button>

          <br></br>
          <br></br>

          <p>{inputText}</p>
          <input value={inputText} onChange={(e) => { handleInput(e) }}></input>

        </div>
<br/>
        <div>
          <UpdatingObjects />
        </div>


        <div>
          <Counter />
        </div>


        <div>
          <UpdateArrays />
        </div>

        <div>
          <List />
        </div>






      </header>
    </div>
  );
}

export default App;

