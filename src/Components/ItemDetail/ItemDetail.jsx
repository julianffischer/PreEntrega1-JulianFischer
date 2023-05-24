import "./Assets/ItemDetail.scss"
import React, { useContext } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"




export const ItemDetail = ({name, description, stock, price, image, id }) => {

  const [quantityAdded, setquantityAdded] = useState(0)

  const {addItem} = useContext (CartContext)

  const handleOnAdd = (quantity)=>{
    setquantityAdded (quantity)

    const item = {
      id, name, price
    }

    addItem (item, quantity)
  }

  return (
    <div key={id} className="Container">
      <div className="card text-light card-background containerProductosApple">
        <img src={image} className="card-img img-productos imgAirpod" alt="..." />
        <div className="card-img-overlay">
          <div className="container__informacion--texto">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text-price">$<small>{price} USD</small></p>
          </div>
        </div>
        {quantityAdded > 0 ? (
          <>
          <div className="ContainerButton">
            <Link to="/cart" className="option">Buy finish</Link>
            <Link to="/" className="option2">Continue shopping</Link>
          </div>
          </>
        ) : (
          <ItemCount stock={stock} valueInitial={0} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};  
