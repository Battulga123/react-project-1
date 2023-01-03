
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Product from './Product'
import Product2 from './Product2';
import ProductFunc from './ProductFunc';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h3>Popular Products</h3>
        <hr/>
        <Product/>
        <br/>
        <Product2/>
        <br/>
        <ProductFunc/>
        <br/>

        </div>

      </header>
    </div>
  );
}

export default App;



