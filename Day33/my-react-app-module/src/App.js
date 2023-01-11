
import './App.css';
import ProductFunc from './ProductFunc';
import products from './Seeds';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';


function App() {


  const [productList, setProductList] = useState(products)

  function handeleProductUpVote(productId) {
    console.log('upvoted', productId)
    // const foundProdcut = products.filter(product => {
    //   if (product.id == productId) {
    //     return product
    //   }
    // })
    // console.log(foundProdcut[0].votes)
    // foundProdcut[0].votes = foundProdcut[0].votes + 1
    // console.log(foundProdcut[0].votes)

    console.log(products)
    const newProducts = productList.map(product => {
      if(product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        })
      } else {
        return product
      }
    })

    console.log(newProducts)
    setProductList(newProducts)


  }
  const productComponents = productList.map((product) => {

    return <ProductFunc title={product.title}
      id={product.id}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      stars={product.stars}
      onVote={handeleProductUpVote}
    />
  })

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Popular Products</h3>
          <hr />
          {productComponents}
        </div>
      </header>
    </div>
  )
};


export default App;



