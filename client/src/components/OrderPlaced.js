import React from 'react'
import Auth from './Auth'
import Navbar from './Navbar'

const OrderPlaced = () => {
    return (
        <div>
            <Auth />
            <Navbar />
            <h1>Order placed Successfully</h1>
        </div>
    )
}

export default OrderPlaced
