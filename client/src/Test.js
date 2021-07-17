import React from "react";
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./Test.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Test = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <div>One</div>
                    <div>Two</div>
                    <div>Three</div>
                    <div>Four</div>
                    <div>Five</div>
                    <div>Six</div>
                    <div>Seven</div>
                    <div>Eight</div>
                </Carousel>
            </div>
        </>
    )
}

export default Test
