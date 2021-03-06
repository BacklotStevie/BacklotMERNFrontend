import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './reviews.css'

const ReviewsList = (props) => {
    const [reviews, setReviews] = useState(false)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/reviews`)
            .then((res) => {

                console.log(res.data)
                setReviews(res.data)
            })
    }, [])

    let width = ""

    const ShowReviews = () => {
        return reviews && reviews.map((review, i, arr) => {
            return (
                // <div className="story col-lg-3 col-sm-12 mb-5">
                //     <div className="story-info card w-100 h-100">
                //         <img className="card-img " src={review.img} alt="card" />
                //         <div className="card-img-overlay">
                //             <Link to={`/reviews/${review._id}`}><h1>{review.title}</h1></Link>
                //             <h4>{review.writer}</h4>
                //         </div>
                //     </div>
                // </div>


            <div className=" col-lg-3 mb-4">
                <div className=" thumbnail text-center">
                   <img src={review.img} alt="image card" className=" reviews-image"/>
                   <div className=" caption">
                        <Link to={`/reviews/${review._id}`}><h1>{review.title}</h1></Link>
                        <h4>{review.writer}</h4>
                    </div>
                </div>
            </div>
            )
        })
    }


    return (
        <div className="container">
            <div className="row">
                <ShowReviews />
            </div>
        </div>

    );

};

export default ReviewsList;