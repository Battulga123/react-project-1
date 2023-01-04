
import './App.css';
import Product from './Product'
import Product2 from './Product2';
import ProductFunc from './ProductFunc';
import products from './Seeds';
import 'bootstrap-icons/font/bootstrap-icons.css'


function App() {

   const productList = products.map((product) => {
        console.log(product)
        return <ProductFunc title ={product.title}
        id = {product.id}
        description = {product.description}
        url = {product.url}
        votes = {product.votes}
        submitterAvatarUrl = {product.submitterAvatarUrl}
        productImageUrl = {product.productImageUrl}
         />
  })

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Popular Products</h3>
          <hr />
          {productList}
          
        </div>

      </header>
    </div>
  )};


export default App;



