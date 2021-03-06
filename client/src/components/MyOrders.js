import React from 'react'
import { Link } from 'react-router-dom'
import noOrdersImg from '../images/no-order.PNG'

const MyOrders = () => {
    return (
        <div>
            <section id="my-orders" className="pb-3">
                <div className="container flexWrapper flex-column">
                    <img src={noOrdersImg} className="img-fluid" />
                    <h3 className="pb-3">No orders yet</h3>
                    <h6 className="pb-3">Looks Like You haven't made Your Orders Yet</h6>
                    <Link to="/">
                        <button className="btn btn-success w-100">Start Shopping</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default MyOrders
