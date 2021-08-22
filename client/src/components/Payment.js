import React, { useState } from 'react'
import Navbar from './Navbar'
import Auth from './Auth'
import './style.css'
import aImg from '../images/pay-card.png'
import bImg from '../images/pay-cod.png'
import cImg from '../images/pay-paypal.png'
import Footer from './Footer'

const Payment = () => {


    const [activePaymentMode, setActivePaymentMode] = useState('cod')

    const changeMode = (e) => {
        setActivePaymentMode(e.currentTarget.id)
    }

    return (
        < div >
            <Auth />
            <Navbar />
            <section id="payment-method">
                <div className="container">
                    <div className="row">
                        <h3 className="text-center">Choose payment method</h3>
                        <br /><br />
                        <div className="col-4 col-md-4">

                            <div class="card p-2 border-0" id='card' onClick={changeMode}>
                                <img src={aImg} class="sizing"
                                    className={activePaymentMode === 'card' ? "selected-mode" : null}
                                />
                            </div>
                            <div class="card-body">
                                <p class="card-text text-center">Pay with cards</p>
                            </div>

                        </div>
                        <div className="col-4 col-md-4">

                            <div class="card p-2 border-0" id='cod' onClick={changeMode}>
                                <img src={bImg}
                                    className={activePaymentMode === 'cod' ? "selected-mode" : null}
                                />
                            </div>
                            <div class="card-body">
                                <p class="card-text text-center">Cash on delivery</p>
                            </div>

                        </div>
                        <div className="col-4 col-md-4">

                            <div class="card p-2 border-0" id='paypal' onClick={changeMode}>
                                <img src={cImg}
                                    className={activePaymentMode === 'paypal' ? "selected-mode" : null}
                                />
                            </div>
                            <div class="card-body">
                                <p class="card-text text-center">Pay with PayPal</p>
                            </div>

                        </div>
                        <div className="col-6 col-md-6 mx-auto p-5">
                            <button type="submit" class="btn btn-success w-100">Proceed</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    )
}

export default Payment
