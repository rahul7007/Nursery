import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <section id="footer" class="py-5 bg-light">
                <div className="row">
                    <div className="col-lg-3 col-md-6 pt-3">
                        <ul>
                            <span>Useful Links</span>
                            <li>PRIVACY POLICY</li>
                            <li>CATEGORIES</li>
                            <li>SERVICES</li>
                            <li>GALLERY</li>
                            <li>TESTIMONIALS</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 pt-4">
                        <ul>
                            <li>HOME</li>
                            <li>PRODUCTS</li>
                            <li>WHAT WE DO</li>
                            <li>VIDEOS</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 pt-3">
                        <ul>
                            <span>CONTACT</span>
                            <li>Hojai, Assam, 781016, Nagaon</li>
                            <li>contact@roushan.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 social-icons pt-3">
                        <ul>
                            <span className="d-block">Connect</span>
                            <li><i class="fab fa-facebook-f"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-3 text-center">
                    © Copyrights 2021 - 2022. Hojai Plant.All Rights Reserved.
                </div>
            </section>
        </div>
    )
}

export default Footer
