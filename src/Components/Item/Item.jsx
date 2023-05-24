import React from 'react'
import './assets/item.scss'

import { NavLink } from 'react-router-dom';



export const Item = ({ name, price, stock, description, image, id}) => {

  return (
    <>
            <div class=" card text-light card-background containerProductosApple">
                <img src={image} class="card-img img-productos imgAirpod" alt="..."/>
                    <div class="card-img-overlay">
                    <div class="container__informacion--texto">
                        <h5 class="card-title ">{name}</h5>
                    </div>
            </div>
              <NavLink to={`/item/${id} `} className='ButtonInformation' >More information</NavLink>
            </div>
    </>
  )
}

