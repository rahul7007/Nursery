import React, { useState } from 'react'
import Navbar from './Navbar'
import cart from '../images/empty-cart.png'
import { Link } from 'react-router-dom'
import Auth from './Auth'
import Footer from './Footer'
import ProductImage from '../images/featured-plant2.jpg'

const Cart = () => {
    return (
        <div>
            <Auth />
            <Navbar />
            <section id="cart">
                {localStorage.getItem("cartItems") ?

                    <div className="container py-5 shadow-lg bg-body">
                        <div className="row gx-2">
                            {JSON.parse(localStorage.getItem("cartItems")).map((val, i) => {
                                return (
                                    <>
                                        <div className="col-lg-8">
                                            <p>My Cart(1 item)CLEAR CART</p>

                                            <table class="table borderless">
                                                <thead className="bg-light">
                                                    <tr>
                                                        <th style={{ width: '31.25rem' }} scope="col">Item(s) Details</th>
                                                        <th className="text-center" scope="col">Quantity</th>
                                                        <th className="text-end" scope="col">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <img src={ProductImage} className=" img-fluid border" />
                                                                </div>
                                                                <div className="col-lg-8 d-flex justify-content-center flex-column">
                                                                    <p className="ps-3">{val.name}</p>
                                                                    <p className="ps-3">₹ {val.price}</p>
                                                                    <p>
                                                                        <span className="px-3 action">
                                                                            <i class="far fa-heart pe-2"></i>
                                                                            Move to wishlist
                                                                        </span>
                                                                        <span className="px-2 action">
                                                                            <i class="fas fa-times pe-2"></i>
                                                                            Remove
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <select name="cars" id="cars" className="rounded-pill">
                                                                <option value="volvo">1</option>
                                                                <option value="saab">2</option>
                                                                <option value="mercedes">3</option>
                                                                <option value="audi">4</option>
                                                            </select>
                                                        </td>
                                                        <td className="text-end">
                                                            ₹ 700
                                                        </td>
                                                    </tr>

                                                </tbody>

                                            </table>

                                        </div>
                                        {i === 0 ?
                                            <div className="col-lg-3 p-2 mx-auto d-flex align-self-start flex-column border shadow-lg bg-body">
                                                <div className="col-12">
                                                    <table class="table borderless">
                                                        <tbody>
                                                            <tr>
                                                                <td className="border-0">Item(s) Total</td>
                                                                <td className="text-end border-0">Rs. 500</td>
                                                            </tr>

                                                            <tr>
                                                                <td>Delivery Charges</td>
                                                                <td className="text-end">Free</td>
                                                            </tr>

                                                            <tr>
                                                                <td className="border-0">Amount Payable</td>
                                                                <td className="text-end border-0">rr 67</td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </div>
                                                <button className="btn btn-success w-100">CHEKCOUT</button>
                                            </div> : null
                                        }
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    :
                    <div id="temp" className="container flexWrapper flex-column py-5">
                        <img src={cart} className="img-fluid" />
                        <h3 className="pb-3">Your Cart is Empty</h3>
                        <h6 className="pb-3">Looks Like You haven't made Your Choice Yet</h6>
                        <Link to="/">
                            <button className="btn btn-success">Start Shopping</button>
                        </Link>
                    </div>
                }
            </section>
            <Footer />
        </div>
    )
}

export default Cart
