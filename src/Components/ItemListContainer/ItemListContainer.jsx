import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebaseconfig'
import { Loader } from '../../Resources/Loader'

export const ItemListContainer = ( { greeting } ) => {
  const [products, setProducts] = useState ([])
  const [Loading, setLoading] = useState(true)

  const { categoryId } = useParams ()

  useEffect (()=>{
    setLoading(true)
    
    const collectionRef = categoryId
    ? query(collection (db, 'Productos'), where('category', '==', categoryId))
    : collection (db, 'Productos')

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data}
        })
        setProducts(productsAdapted)
      })
      .catch (error => {
        console.log (error)
      })
      .finally(()=>{
        setLoading (false)
      })
  }, [categoryId])
  

      return (
      <div>
        {Loading ? (
          <Loader></Loader>
            ) : (
          <ItemList products={products} />
        )}
    </div>
);}
