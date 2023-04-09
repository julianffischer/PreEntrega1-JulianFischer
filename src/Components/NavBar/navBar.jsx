import React from 'react';
import Apple from './assets/Apple.png';
import {CarritoDeCompras} from '../CartWidget/Cartwidget'

export const NavBar = () => {
    return ( 
        <header>
            {/* <!-- Barra de navegación --> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0">
                <div class="container-fluid p-2 ">
                <a class="navbar-brand text-li0ght" href="#"> <img src={Apple} alt="" srcset="" className='image-apple'/></a>
                <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02 " aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation ">
                    <span class="navbar-toggler-icon "></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul class="navbar-nav m-auto mb-lg-2">
                    <li class="nav-item">
                            <a class="nav-link mx-2" aria-current="page" href="#">Mac</a>
                        </li>
                        <li class="nav-item">
                            <a class=" nav-link mx-2" href="#">iPad</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="#">Iphone</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="#">Watch</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="#">AirPods</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="#"> TV y Casa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="#"> Soporte </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="#"> Dónde comprar</a>
                        </li>
                        </ul>
                        <form class="d-flex" role="search">
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                        <div>
                            <CarritoDeCompras/>
                        </div>
                        </form>
                    </div>
                    </div>
                </nav>
    </header>
    )
}