import { useState, useEffect, useContext } from "react"
import { CartContext } from "./context/cartContextProvider";

function ProductOverview() {
  const [products, setProducts] = useState([])
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [])

  return (
    <div className='product-overview'>
      <h2>Product Overview</h2>
      {
        products.map((product) => {
          return (
            <div className='product' key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={() => { addToCart(product) }}>Add to cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export { ProductOverview }