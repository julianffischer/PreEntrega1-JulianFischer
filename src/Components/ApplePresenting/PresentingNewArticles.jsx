import React from "react";
import apple14Pro from "./assets/Iphone-14-pro.jpg"
import watchSeries8 from "./assets/Watch Series 8-apple.jpg"
import apple14 from "./assets/Iphone-14.jpg"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";


export const Body = () => {
    return (
    <div>
        <div className="container-iphone-14">
            <div className="container-iphone-14-contenido-1">
                <h1 className="container-iphone-14-contenido-1-titulo">iPhone 14</h1>
                <span className="container-iphone-14-contenido-1-titulo-1">large and extra large</span>
                <br/>
                <Link to="/error" className="container-iphone-14-contenido-1-titulo-2"> More information</Link>
            </div>
            <img src={apple14} alt="" className="container-iphone-14-img"></img>
        </div>
        {/* <!-- Contenedor iphone 14 pro  --> */}
        <div class="container-iphone-14-pro">
          <div class="container-iphone-14-pro-contenido-1">
            <h1 class="container-iphone-14-pro-contenido-1-titulo">iPhone 14 Pro</h1>
              <span class="container-iphone-14-pro-contenido-1-titulo-1">more power</span>
                <br/>
                  <Link to="/error" class="container-iphone-14-pro-contenido-1-titulo-2"> More information</Link>
          </div>
          <img src={apple14Pro} alt="" className="container-iphone-14-img"/>

        </div>
        {/* Contenedor watch series 8 */}
        <div className="container-watch-series-8">
        <div className="container-watch-series-8-contenido-1">
          <h1 className="container-watch-series-8-contenido-1-titulo"><img src="./Img/Apple.png" alt=""/>Watch</h1>
            <span className="container-watch-series-8-contenido-1-titulo-1">SERIES 8</span>
              <br/>
                <Link to="/error" className="container-watch-series-8-contenido-1-titulo-2"> More information</Link>
        </div>
        <img src={watchSeries8} alt="" className="container-watch-series-8-img"/>
      </div>
      <div>
          <ItemListContainer/>
      </div>
    </div>
    )
}