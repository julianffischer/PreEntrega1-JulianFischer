import React from 'react'
import airpodPicture from './assets/Airpod-pro.jpg'
import ipadPicture from './assets/Ipad.jpg'
import macAirPicture from './assets/Mac-air.jpg'
import watchSeries8Picture from './assets/Watch Series 8-apple.jpg'
import macbookProPicture from './assets/macbook-pro.jpg'
import watchUltraApplePicture from './assets/Watch ultra-apple.jpg'


export const ContainerList = ( {greeting} ) => {
  return(
    <div>
      <h1>{ greeting }</h1>
      <div className='container__productos'>
      <div class=" card text-light card-background">
            <img src={airpodPicture} class="card-img img-productos " alt="..."/>
            <div class="card-img-overlay">
              <div class="container__informacion--texto">
                <h5 class="card-title ">Airpod Pro</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          

          {/* <!-- Contenedor ipad pro --> */}

          
          <div class=" card text-light card-background  ">
            <img src={ipadPicture} class="card-img img-productos " alt="..."/>
            <div class="card-img-overlay">
              <div class="container__informacion--texto">
                <h5 class="card-title ">Airpod Pro</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        
          
           {/* <!-- Contenedor ipad --> */}
        
              {/* <!-- Contenedor Airpod --> */}
              <div class=" card text-light card-background">
                <img src={macAirPicture} class="card-img img-productos " alt="..."/>
                <div class="card-img-overlay">
                  <div class="container__informacion--texto">
                    <h5 class="card-title ">Airpod Pro</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
  
            {/* <!-- Contenedor ipad pro --> */}
  
            
            <div class=" card text-light card-background">
              <img src={macbookProPicture} class="card-img img-productos " alt="..."/>
              <div class="card-img-overlay">
                <div class="container__informacion--texto">
                  <h5 class="card-title ">Airpod Pro</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>   
            {/* <!-- Contenedor Airpod --> */}
           
            <div class=" card text-light card-background">
              <img src={watchSeries8Picture} class="card-img img-productos " alt="..."/>
              <div class="card-img-overlay">
                <div class="container__informacion--texto">
                  <h5 class="card-title ">Airpod Pro</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
  
            {/* <!-- Contenedor ipad pro --> */}
  
            
            <div class=" card text-light card-background">
              <img src={watchUltraApplePicture} class="card-img img-productos " alt="..."/>
              <div class="card-img-overlay">
                <div class="container__informacion--texto">
                  <h5 class="card-title ">Airpod Pro</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small>Last updated 3 mins ago</small></p>
                  
                </div>
              </div>
            </div>
            
            </div>
    </div>
  )
   
  
}
