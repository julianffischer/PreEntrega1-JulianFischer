import React from "react";
import CarroDeCompras from './assets/CarroDeCompras.png'
// import {ItemContainerList} from '../ItemListContainer/ItemListContainer'

export const CartWidget = () => {

    return (
        <div className="container__shopingCart">
            <img src={CarroDeCompras} alt="" className="shoppingCart" />
            <h1 className="shoppingCart-number"></h1>
        </div>
    )
}