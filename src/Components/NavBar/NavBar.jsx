import React from 'react';
import Apple from './assets/Apple.png';
import {CartWidget} from '../CartWidget/Cartwidget' 

import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return ( 
        <header>
            {/* <!-- Barra de navegación --> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 NavBarFixed">
                <div className="container-fluid p-2 ">
                {/* <a class="navbar-brand text-li0ght" href="#"> <img src={Apple} alt="" srcSet="" className='image-apple'/></a> */}
                <NavLink  className="navbar-brand text-li0ght" to={`/`}> <img src={Apple} alt="" srcSet="" className='image-apple'/> </NavLink>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02 " aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation ">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav m-auto mb-lg-2">
                        <li className="nav-item">
                            <NavLink  className="nav-link mx-2" to={`/category/computer`}> Mac </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link mx-2" to={`/category/tablet`}> Ipad </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link mx-2" to={`/category/phone`}> Iphone </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link mx-2" to={`/category/watch`}> Watch </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  className="nav-link mx-2" to={`/category/headphones`}> airpods </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link mx-2" to={`/error`}> TV y Casa </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  className="nav-link mx-2" to={`/error`}>Soporte </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  className="nav-link mx-2" to={`/error`}>Dónde comprar </NavLink>
                        </li>
                        </ul>
                        
                        <form className="d-flex" role="search">
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                        <div>
                            <CartWidget/>
                        </div>
                        </form>
                    </div>
                    </div>
                </nav>
    </header>
    )
}
