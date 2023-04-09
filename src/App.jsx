import './App.scss';
import {NavBar} from './Components/NavBar/navBar'
import { ContainerList } from './Components/ItemListContainer/itemListContainer';
import {NewArticles} from './Components/ApplePresenting/PresentingNewArticles'

export function App() {
  return (
   <div className ="App">
    <NavBar />
    <NewArticles />
    <ContainerList greeting={"bienvenidos"}/>
   </div>
  );
}

