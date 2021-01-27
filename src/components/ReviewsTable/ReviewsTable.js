import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewsList = () => {
    const [reviews, setReviews] = useState(false)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/reviews`)
            .then(res => {
                setReviews(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })


    const ShowList = () => {

        return reviews && reviews.map(review => {
            return (
                <tr>
                    <th>{review.title}</th>
                    <th>{review.writer}</th>
                </tr>
            )
        })
    }


    return (
        <div>
            <h3>Reviews</h3>
            <table className='table'>
                <thead className='thead-light'>
                    <tr>
                        <th>Title</th>
                        <th>Writer</th>
                    </tr>
                </thead>
                <tbody>
                    <ShowList />
                </tbody>
            </table>
        </div>
    )
}
export default ReviewsList