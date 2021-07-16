import React from 'react'
import './index.css'
import aa from './images/logo.png'

const App = () => {
  return (
    <div className="container-fluid">
      {/* Top navbar */}
      <section id="topNav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="#"><i class="fab fa-facebook-square"></i></a>
              <a class="nav-link" href="#"><i class="fab fa-linkedin"></i></a>
              <a class="nav-link" href="#"><i class="fab fa-instagram-square"></i></a>
              <a class="nav-link flexWrapper" href="#">
                <i class="fas fa-envelope __icon-with-mail">contact@roushan.com</i>
              </a>
            </div>
            <div class="navbar-nav ms-auto">
              <a class="nav-link flexWrapper" href="#"><i class="fas fa-map-marker-alt px-2"></i>
                <span>Hojai</span>
              </a>
              <a class="nav-link flexWrapper" href="#"><i class="fas fa-shipping-fast px-2"></i>
                <span>Track Order</span>
              </a>
              <a class="nav-link flexWrapper" href="#"><i class="fas fa-user px-2"></i>
                <span>Login | Sign Up</span>
              </a>
            </div>
          </div>
        </nav>
      </section>
      {/* Navbar */}
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
    </div >
  )
}

export default App
