import React from 'react'
import Carousel from "react-elastic-carousel";
import './style.css'
import cardImg from '../images/featured-plant3.jpg'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 7 },
];

const arr = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25]
const plants = [
    { name: 'abc', price: '300', im: 'featured-plant.1jpg' },
    { name: 'xyz', price: '400', im: 'featured-plant.2jpg' },
    { name: 'abc', price: '213', im: 'featured-plant.3jpg' },
    { name: 'xyz', price: '122', im: 'featured-plant.4jpg' },
    { name: 'abc', price: '34', im: 'featured-plant.5jpg' },
    { name: 'xyz', price: '443', im: 'featured-plant.6jpg' },
    { name: 'abc', price: '434', im: 'featured-plant.7jpg' },
    { name: 'xyz', price: '343', im: 'featured-plant.8jpg' },
    { name: 'abc', price: '323', im: 'featured-plant.9jpg' },
    { name: 'xyz', price: '211', im: 'featured-plant.10jpg' },
    { name: 'abc', price: '223', im: 'featured-plant.11jpg' },
    { name: 'xyz', price: '455', im: 'featured-plant.12jpg' },
]

const FeaturedCards = () => {
    return (
        <div>

            <Carousel breakPoints={breakPoints}>
                {/* {arr.map((val, i) => {
                    return <div>Card {val}</div>
                })} */}

                {plants.map((val, i) => {
                    return (
                        <div className="card">
                            {/* <img src={val.im + (i + 1) + '.jpg'} className="card-img-top" alt="404" /> */}
                            <img src={cardImg} className="card-img-top" alt="404" />
                            <div className="card-body text-center p-0">
                                <p className="card-text">{val.name}</p>
                                <p className="card-text">Rs. {val.price}</p>
                            </div>
                        </div>
                    )
                })}

            </Carousel>

        </div>
    )
}

export default FeaturedCards
