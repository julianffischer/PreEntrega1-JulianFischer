import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer';
import {Body} from './Components/ApplePresenting/PresentingNewArticles';
import { Footer } from './Components/Footer/Footer';
import { NavBar } from './Components/NavBar/NavBar';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './Components/Cart/Cart'
import { CartProvider } from './Context/CartContext';
import { Checkout } from './Components/Checkout/Checkout';
import { Error } from './Components/Error/Error';


export function App() {
  return (
  <div className ="App">
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
            <Routes>
              <Route path='/' element={<Body/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='/error' element = {<Error></Error>}></Route>
            </Routes>
          <Footer/>
      </CartProvider>
    </BrowserRouter>
  </div>
  );
}

