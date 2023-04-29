import React from 'react'
import './assets/item.scss'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({ id, name, price, stock, description, image, category}) => {
  return (
    <>
            <div class=" card text-light card-background containerProductosApple">
                <img src={image} class="card-img img-productos imgAirpod" alt="..."/>
                    <div class="card-img-overlay">
                    <div class="container__informacion--texto">
                        <h5 class="card-title ">{name}</h5>
                        <p class="card-text">{description}</p>
                        <p class="card-text-price"> price: <small>{price}</small></p>
                    </div>
            </div>
                <ItemCount stock= {stock} valueInitial= {0} onAdd = {(item)=> {console.log (`La cantidad agregada es de ${item}`)}}/>
            </div>
    </>
  )
}

