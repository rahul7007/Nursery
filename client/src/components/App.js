import React from 'react'
import './style.css'
import aa from '../images/logo.png'
import aa1 from '../images/logo1.png'
import TestimonialImg from '../images/testimonials-img.png'
import FeaturedCards from './FeaturedCards'
import TestimonialCards from './TestimonialCards'

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
      {/* About section */}
      <section id="about">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://source.unsplash.com/1600x600/?cactus" class="d-block w-100" alt="404" />
              <div class="carousel-caption d-none d-md-block ms-auto">
                {/* <h5>Lorem Lorem Lorem LOeferf ferfer ferfe</h5> */}
                <p className="py-0 mb-0">Some representative placeholder</p>
                <p className="py-0 mb-0">content for the </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://source.unsplash.com/1600x600/?plant" class="d-block w-100" alt="404" />
              <div class="carousel-caption d-none d-md-block">
                {/* <h5>Second slide label</h5> */}
                <p className="py-0 mb-0">Some representative placeholder</p>
                <p className="py-0 mb-0">content for the </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://source.unsplash.com/1600x600/?bonsai" class="d-block w-100" alt="404" />
              <div class="carousel-caption d-none d-md-block">
                {/* <h5>Third slide label</h5> */}
                <p className="py-0 mb-0">Some representative placeholder</p>
                <p className="py-0 mb-0">content for the </p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section id="featured" className="py-5">
        <h1 className="text-center">Featured Plants</h1>
        <div className="container-fluid">
          <div className="row">
            <FeaturedCards />
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-5">
        <h1 className="text-center">Customer's review</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              <img src={TestimonialImg} className="img-fluid flipImg" />
            </div>
            <div className="col-lg-7">
              <TestimonialCards />
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default App
