import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Auth from './Auth'
import Footer from './Footer'
import api from '../api'
import './style.css'

const Checkout = ({ history }) => {

    return (
        <div>
            <Auth />
            <Navbar />
            <section>
                <div className="container py-5 shadow-lg bg-body">
                    <div className="row gx-2">
                        <div className="col-lg-8">
                            <p>Enter your address</p>
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Full Name (First and Last name)</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Mobile number</label>
                                    <input type="text" class="form-control" placeholder="10 digit mobile number without prefix" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Flat, House no., Building, Company, Apartment</label>
                                    <input type="text" class="form-control" placeholder="1234 Main St" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label">Area, Colony, Street, Sector, Village</label>
                                    <input type="text" class="form-control" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label">Landmark</label>
                                    <input type="text" class="form-control" placeholder="e.g. Near AIIMS Flyover, Behind Regal Cinema, etc." />
                                </div>

                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">Town/City</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputZip" class="form-label">Zip</label>
                                    <input type="text" class="form-control" placeholder="6 digits [0-9] PIN code" />
                                </div>
                                <div class="mt-5 d-flex">
                                    <button type="submit" class="btn btn-primary w-50 mx-auto" onClick={() => history.push('/order-placed')}>Proceed to buy</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-3 p-2 mx-auto d-flex align-self-start flex-column border shadow-lg bg-body">
                            <div className="col-12">
                                <table class="table borderless">
                                    <tbody>
                                        <tr>
                                            <td className="border-0">Item(s) Total</td>
                                            <td className="text-end border-0">
                                                Rs. {'ZZZZ'}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Delivery Charges</td>
                                            <td className="text-end">Free</td>
                                        </tr>

                                        <tr>
                                            <td className="border-0">
                                                Amount Payable
                                                <p style={{ fontSize: '.6rem' }}>INCLUSIVE OF ALL TAXES</p>
                                            </td>
                                            <td className="text-end border-0">{'XXXX'}</td>
                                        </tr>
                                        <tr>
                                            <td className="border-0">
                                                <span style={{ fontSize: '.8rem' }} >Payment mode Cash On Delivery</span>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Checkout
