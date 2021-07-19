import React from 'react'
import Carousel from "react-elastic-carousel";
import './style.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 7 },
];

const feedback = [
    { name: 'Rahul', comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece' },
    { name: 'Kushal', comment: 'If classical Latin literature from' },
    { name: 'Budhi', comment: 'Contrary to popular belief' },
    { name: 'Biki', comment: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur' },
    { name: 'Nitul', comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered' },
    { name: 'Deb', comment: 'middle of tex' },
    { name: 'Sohil', comment: 'This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.."' },
    { name: 'Xyaa', comment: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced' },
    { name: 'Virat', comment: 'below for those ' },
]

const TestimonialCards = () => {
    return (
        <div>
            <Carousel breakPoints={breakPoints}>
                {/* {arr.map((val, i) => {
                    return <div>Card {val}</div>
                })} */}

                {feedback.map((val, i) => {
                    return (
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-text">{val.name}</h4>
                                <p className="card-text">Rs. {val.comment}</p>
                            </div>
                        </div>
                    )
                })}
            </Carousel>

        </div>
    )
}

export default TestimonialCards
