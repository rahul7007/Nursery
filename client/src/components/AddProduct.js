import React, { useState, useEffect } from 'react'
import Auth from './Auth'
import Navbar from './Navbar'
import ProductImage from '../images/featured-plant2.jpg'
import ShieldImage from '../images/shield.png'
import Footer from './Footer'
import api from '../api';
import Spinner from './Spinner';

const AddProduct = (props) => {

    const [prodInfo, setProdInfo] = useState('')
    const [delivery, setDelivery] = useState('hidden')

    const loadAProduct = () => {
        api.getProductById(props.match.params.productId).then((response) => {
            if (response.error) {
                console.log("Error", response.data.data);
            } else {
                setProdInfo(response.data.data)
            }
        })
    }

    useEffect(() => {
        loadAProduct()
    }, [])

    const checkPin = (e) => {
        e.preventDefault()
        setDelivery('')
    }

    return (
        <div>
            <Auth />
            <Navbar />
            <section id="product">
                <div className="container bg-light p-4 border rounded shadow-lg bg-body">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <img src={ProductImage} className="img-fluid border rounded" />
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <h4>{prodInfo.name}</h4>
                            <br />
                            <h3>Rs. {prodInfo.price}</h3>

                            <form class="row g-0 pt-3">
                                <div class="col-auto">
                                    <input type="text" class="form-control" placeholder="Enter pincode" />
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-success" onClick={checkPin}>Check</button>
                                </div>
                            </form>

                            <div style={{ visibility: delivery }}>
                                Delivery by Jul 24, Saturday by 01:00 PM
                            </div>

                            <div className="row pt-5">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <button className="btn btn-success">
                                        <i class="fas fa-cart-plus pe-2"></i>
                                        ADD TO CART
                                    </button>
                                </div>
                                <div className="col-lg-8 col-md-6 col-sm-6">
                                    <button className="btn btn-success">
                                        <i class="far fa-play-circle pe-2"></i>
                                        BUY NOW
                                    </button>
                                </div>
                                <br /><br />
                                <img src={ShieldImage} className="img-fluid shield-icon" />
                                Safe and Secure payments.100% Authentic products
                            </div>

                            <div className="row pt-5">
                                <h3>Specifications</h3>
                                <hr />
                                <div className="col-lg-4 col-md-4">
                                    Brand
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    Beautiful Yellow Daffodils
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AddProduct
