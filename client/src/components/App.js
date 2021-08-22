import React from 'react'
import './style.css'
import TestimonialImg from '../images/testimonials-img.png'
import FeaturedCards from './FeaturedCards'
import TestimonialCards from './TestimonialCards'
import { SimpleMap } from './Map'
import YoutubeEmbed from './YoutubeEmbed'
import Footer from './Footer'

const App = () => {

  return (
    <div className="container-fluid">

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
      {/* featured images */}
      <section id="featured" className="py-5">
        <h1 className="text-center">Featured Plants</h1>
        <div className="container-fluid">
          <div className="row">
            <FeaturedCards />
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section id="testimonials" className="py-5">
        <h1 className="text-center">Customer review</h1>
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
      {/* youtube videos */}
      <section id="videos" className="py-5">
        <h1 className="text-center">Videos</h1>
        <div className="row pb-3 px-5">
          <div className="col-lg-6 col-md-6">
            <YoutubeEmbed embedId="0W6i5LYKCSI" />
          </div>
          <div className="col-lg-6 col-md-6">
            <YoutubeEmbed embedId="kWr8SvbUGMo" />
          </div>
        </div>

        <div className="row pb-3 px-5">
          <div className="col-lg-6 col-md-6">
            <YoutubeEmbed embedId="xyr3Vj83lJI" />
          </div>
          <div className="col-lg-6 col-md-6">
            <YoutubeEmbed embedId="X0QqhFn8HC8" />
          </div>
        </div>
      </section>
      {/* contact */}
      <section id="contact" className="py-5">
        <h1 className="text-center">Contact Us</h1>
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-4">
              <form className="pt-5">
                <div class="mb-3">
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Phone Number" autoComplete="off" />
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleEmail" placeholder="Email" />
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-4">
              <div class="py-5">
                <textarea className="form-control dynamicHeight" placeholder="Message" id="floatingTextarea"></textarea>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" class="btn btn-primary mx-auto __main-btn">Send</button>
          </div>
        </div>
      </section>
      {/* Address */}
      <section id="map" className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div style={{ width: '100%', height: '70vh', borderRadius: '50px' }}>
                <SimpleMap />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 px-4 py-5">
              <div className="row">
                <div className="col-lg-4 col-md-4 text-end">
                  <i class="fas fa-map-marker-alt fs-1"></i>
                </div>
                <div className="col-lg-8 col-md-8">
                  <p>Our Office Address</p>
                  <p>Hojai, Assam, 781016, Nagaon</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 text-end">
                  <i class="fas fa-envelope-open fs-1"></i>
                </div>
                <div className="col-lg-8 col-md-8">
                  <p>General Enquiries</p>
                  <p>contact@roushan.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 text-end">
                  <i class="fas fa-phone-alt fs-1"></i>
                </div>
                <div className="col-lg-8 col-md-8">
                  <p>Call Us</p>
                  <p>+91-8888888888</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 text-end">
                  <i class="fas fa-clock fs-1"></i>
                </div>
                <div className="col-lg-8 col-md-8">
                  <p>Our Timing</p>
                  <p>Mon - Sun : 09:00 AM - 09:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div >
  )
}

export default App
