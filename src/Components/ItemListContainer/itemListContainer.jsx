import { useEffect, useState } from 'react'
import { GetProducts, GetProductsByCategory} from '../../AsyncMock'
import { ItemList } from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'


export const ItemContainerList = ( { greeting } ) => {

  const [products, setProducts] = useState ([])

  const {categoryId} = useParams ()

  useEffect (()=>{
    const AsyncFunction = categoryId ? GetProductsByCategory : GetProducts

    AsyncFunction (categoryId)
      .then (response =>{
        setProducts(response) 
      })
      .catch (error =>{
        console.log (error)
      })
  }, [categoryId])
  
  // useEffect (()=> {
  //   GetProducts()
  //   .then(response => {
  //     setProducts (response)
  //   })
  //   .catch (error => {
  //     console.log (error)
  //   })
  //   }, [])
  

  return(
    <div>
      <h1>{ greeting }</h1>
        <div>
          <ItemList products = {products}></ItemList>          
        </div>
    </div>
  )
   
  
}
