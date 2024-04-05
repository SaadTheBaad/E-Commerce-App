import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import review from '../data/review';

const HomeMainSection = () => {
    const [randomReviews, setRandomReviews] = useState([]);

    useEffect(() => {
        const getRandomReviews = () => {
            const shuffledReviews = review.sort(() => 0.5 - Math.random());
            const selectedReviews = shuffledReviews.slice(0, 2);
            return selectedReviews;
        };

        setRandomReviews(getRandomReviews());
    }, []);

    return (
        <div className='HomeMainSection'>
            {/* <!-- About Us Section --> */}
            <section className="about-us">
                {/* <!-- About Us Content --> */}
                <div >
                <h2>About Us</h2>
                <p>Welcome to <b>BirdCo</b> – Where Birds Thrive!
                    At BirdCo, we're dedicated to elevating the lives of our feathered friends through top-quality birdfood.
                    Committed to excellence, our premium, nutrition-packed blends cater to diverse avian tastes, ensuring every meal
                    is a delightful experience.
                </p>
                </div>
            </section>
            <section className="shop-now">
                {/* <!-- Shop Now Button (as a link to the Products page) --> */}
                <Link to="/Productpage">
                    <button className="shop-now-button">Shop Now</button>
                </Link>
            </section>
            <section className="customer-reviews">
                <h2>Customer Reviews</h2>
                {randomReviews.map((review, index) => (
                    <div key={index} className="review">
                        <p><strong>{review.customerName}</strong></p>
                        <p>{review.reviewContent}</p>
                        <div className="rating">
                            {'Rating: '} 
                            {[...Array(review.stars)].map((_star, index) => (
                                <span key={index}>&#9733;</span> 
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default HomeMainSection;
