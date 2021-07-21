import React, { useState, useEffect } from 'react'
import Carousel from "react-elastic-carousel";
import './style.css'
import cardImg from '../images/featured-plant3.jpg'
import { Link } from 'react-router-dom';
import api from '../api';
import Spinner from './Spinner';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 7 },
];

const FeaturedCards = () => {
    const [getAllProducts, setGetAllProducts] = useState('')

    const loadAllProducts = () => {
        api.displayData().then((response) => {
            if (response.error) {
                console.log("Error", response.data.data);
            } else {
                setGetAllProducts(response.data.data)
            }
        })
    }

    useEffect(() => {
        loadAllProducts()
    }, [])

    return (
        <div>
            {getAllProducts ?
                <Carousel breakPoints={breakPoints}>
                    {getAllProducts.map((val, i) => {
                        return (

                            <Link class="text-decoration-none text-dark" to="/product">
                                <div className="card border">
                                    <img src={cardImg} className="card-img-top" alt="404" />
                                    <div className="card-body text-center p-0">
                                        <p className="card-text">{val.name}</p>
                                        <p className="card-text">Rs. {val.price}</p>
                                    </div>
                                </div>
                            </Link>

                        )
                    })}
                </Carousel>
                : <Spinner />}

        </div>
    )
}

export default FeaturedCards
