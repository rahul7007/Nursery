import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import cart from '../images/empty-cart.png'
import { Link } from 'react-router-dom'
import Auth from './Auth'
import Footer from './Footer'
import ProductImage from '../images/featured-plant2.jpg'

var totalValue = 0
var tempArray = []
const Cart = () => {

    const [cartItems, updateCartItems] = useState(
        JSON.parse(localStorage.getItem("cartItems")) === null ? [] : JSON.parse(localStorage.getItem("cartItems"))
    )

    const [arr, setArr] = useState([])

    const [totalPrice, setTotalPrice] = useState(totalValue)

    const remove = (e) => {
        var cartItemsArray = JSON.parse(localStorage.getItem("cartItems"))
        cartItemsArray.splice(e.target.id, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItemsArray))
        updateCartItems(cartItemsArray)
        let deductedPrice = totalPrice - cartItems[e.target.id].price
        setTotalPrice(deductedPrice)
    }

    useEffect(() => {
        cartItems.map((val, i) => {
            totalValue = totalValue + val.price
            setTotalPrice(totalValue)
        })

    }, [])

    const testIng = (e) => {

        const objIndex = e.target.id

        const updatedObj = { ...cartItems[objIndex], price: cartItems[e.target.id].price * e.target.value };

        tempArray = [
            ...tempArray.slice(0, objIndex),
            updatedObj,
            ...tempArray.slice(objIndex + 1),
        ];
        console.log("cartItems", cartItems)
        console.log("tempArray", tempArray)
        setArr(tempArray)
    }

    const check = () => {
        console.log("cartItems", cartItems)
        console.log("tempArray", tempArray)
        let Xtotal = 0
        let diff = cartItems.length - tempArray.length
        for (let i = 0; i < tempArray.length; i++) {
            Xtotal = Xtotal + tempArray[i].price
        }
        // console.log("Final", Xtotal)
        // for (let i = cartItems.length - 1; i > diff; i--) {
        //     Xtotal += cartItems[i].price
        // }
        if (diff) {
            for (let i = tempArray.length; i < cartItems.length; i++) {
                Xtotal = Xtotal + cartItems[i].price
            }
        }
        console.log("Final amt", Xtotal)
    }

    return (
        <div>
            <Auth />
            <Navbar />
            <section id="cart">
                {cartItems.length > 0 ?

                    <div className="container py-5 shadow-lg bg-body">
                        <div className="row gx-2">
                            {cartItems.map((val, i) => {
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
                                                                        <span className="px-2 action" id={i} onClick={remove}>
                                                                            <i class="fas fa-times pe-2"></i>
                                                                            Remove
                                                                        </span>
                                                                        <button onClick={check}>Check</button>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <select className="rounded-pill" id={i} onChange={testIng}>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </td>
                                                        <td className="text-end">
                                                            ₹ {arr[i] ? arr[i].price : cartItems[i].price}
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
                                                                <td className="text-end border-0">
                                                                    Rs. {totalPrice}
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>Delivery Charges</td>
                                                                <td className="text-end">Free</td>
                                                            </tr>

                                                            <tr>
                                                                <td className="border-0">Amount Payable</td>
                                                                <td className="text-end border-0">{totalPrice}</td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </div>
                                                <button className="btn btn-success w-100">CHECKOUT</button>
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
