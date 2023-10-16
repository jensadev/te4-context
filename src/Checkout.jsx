import { useContext } from "react"
import { CartContext } from "./context/cartContextProvider";

function Checkout() {
  const cart = useContext(CartContext);

  console.log(cart)



  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart && cart.cart.map((item, index) => {
          return (
            <li key={index}>{item.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export { Checkout }