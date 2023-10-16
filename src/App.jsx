import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartContextProvider } from './context/cartContextProvider'
import { ProductOverview } from './ProductOverview'
import { Checkout } from './Checkout'

function App() {


  return (
    <CartContextProvider>
      <main className='container'>
        <ul className='nav'>
          <li className='nav-item'>
            <a href='/' className='nav-link active'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='/checkout' className='nav-link'>Checkout</a>
          </li>
        </ul>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductOverview />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </main>
    </CartContextProvider>
  )
}

export default App
