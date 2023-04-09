import React from "react";
import CarroDeCompras from './assets/CarroDeCompras.png'

export const CarritoDeCompras = () => {
    return (
        <div className="container__shopingCart">
            <img src={CarroDeCompras} alt="" className="shoppingCart" />
            <h1 className="shoppingCart-number">0</h1>
        </div>
    )
}