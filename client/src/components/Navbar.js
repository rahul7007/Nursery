import React from 'react'
import './style.css'
import aa from '../images/logo.png'

const Navbar = () => {
    return (
        <div>
            <section id="menu">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={aa} className="img-fluid" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto text-uppercase fs-5">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Gallery</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">What we do</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Testmonials</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default Navbar
