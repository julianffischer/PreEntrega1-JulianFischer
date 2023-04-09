import React from "react";
import apple14Pro from "./assets/Iphone-14-pro.jpg"
import watchSeries8 from "./assets/Watch Series 8-apple.jpg"
import apple14 from "./assets/Iphone-14.jpg"

export const NewArticles = () => {
    return (
    <div>
        <div class="container-iphone-14">
            <div class="container-iphone-14-contenido-1">
                <h1 class="container-iphone-14-contenido-1-titulo">iPhone 14</h1>
                <span class="container-iphone-14-contenido-1-titulo-1">Grande y extra grande</span>
                <br/>
                <a href="#" class="container-iphone-14-contenido-1-titulo-2"> Más información</a>
            </div>
            <img src={apple14} alt="" class="container-iphone-14-img"></img>
        </div>
        {/* <!-- Contenedor iphone 14 pro  --> */}
        <div class="container-iphone-14-pro">
          <div class="container-iphone-14-pro-contenido-1">
            <h1 class="container-iphone-14-pro-contenido-1-titulo">iPhone 14 Pro</h1>
              <span class="container-iphone-14-pro-contenido-1-titulo-1">Grande y extra grande</span>
                <br/>
                  <a href="#" class="container-iphone-14-pro-contenido-1-titulo-2"> Más información</a>
          </div>
          <img src={apple14Pro} alt="" class="container-iphone-14-img"/>

        </div>
        {/* Contenedor watch series 8 */}
        <div class="container-watch-series-8">
        <div class="container-watch-series-8-contenido-1">
          <h1 class="container-watch-series-8-contenido-1-titulo"><img src="./Img/Apple.png" alt=""/>Watch</h1>
            <span class="container-watch-series-8-contenido-1-titulo-1">SERIES 8</span>
              <br/>
                <a href="#" class="container-watch-series-8-contenido-1-titulo-2"> Más información</a>
        </div>
        <img src={watchSeries8} alt="" class="container-watch-series-8-img"/>
      </div>
    </div>
    )
}