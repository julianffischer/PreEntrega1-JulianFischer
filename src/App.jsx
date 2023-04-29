import './App.scss';
import {ItemContainerList} from './Components/ItemListContainer/ItemListContainer';
import {Body} from './Components/ApplePresenting/PresentingNewArticles';
import { Footer } from './Components/Footer/Footer';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



export function App() {
  return (
   <div className ="App">
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/category/:categoryId' element={<ItemContainerList/>}/>
          <Route path='*' element = {<h1>Error</h1>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
   </div>
  );
}

