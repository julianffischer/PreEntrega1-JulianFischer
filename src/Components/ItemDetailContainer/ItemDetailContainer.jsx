import "./Assets/ItemDetail.scss"
import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"

import { getDoc, doc} from 'firebase/firestore'
import { db } from "../../services/firebaseconfig"
import { Loader } from "../../Resources/Loader"


export const ItemDetailContainer = () => {
    const [product, setproduct] = useState(null)
    const [loading, setloading] = useState(true)

    const {itemId} = useParams()

    useEffect (()=>{
        setloading(true)

        const docRef = doc(db, 'Productos', itemId)

        getDoc(docRef)
            .then(response =>{
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setproduct(productsAdapted)
            })
            .catch (error => {
                console.log (error)
            })
            
    }, [itemId])
    return (
    <div className="ItemdetailContainer">
        {product ? <ItemDetail {...product} /> : <Loader/>}
    </div>
    )
}

