import React from 'react'
import Navbar from './Navbar'
import cart from '../images/empty-cart.png'
import { Link } from 'react-router-dom'
import Auth from './Auth'
import Footer from './Footer'

const Cart = () => {
    return (
        <div>
            <Auth />
            <Navbar />
            <section id="cart">
                <div className="container flexWrapper flex-column py-5">
                    <img src={cart} className="img-fluid" />
                    <h3 className="pb-3">Your Cart is Empty</h3>
                    <h6 className="pb-3">Looks Like You haven't made Your Choice Yet</h6>
                    <Link to="/">
                        <button className="btn btn-success">Start Shopping</button>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Cart
