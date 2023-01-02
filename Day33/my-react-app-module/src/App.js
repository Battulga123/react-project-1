
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Popular Products
        </h3>
        <hr></hr>
        <div class="container">
          <div class='image'>
            <img src = "https://ph-files.imgix.net/68d78c27-8cde-4f80-b8af-4728efe30a15.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=2"></img>
          </div>
          <div class="text">
            <p class=""> 55</p>
            <p>Haught or Naught</p>
            <p>Hight-minded or absent-minded? You decide</p>
            <div class="submit">
            <p>Submitted by: </p>
            <img></img>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
