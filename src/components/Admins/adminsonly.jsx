import React from 'react';
import './adminsonly.css';
import { useContext } from "react";
import { userContext } from "../../context/UserCtx";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewsList from '../ReviewsTable/ReviewsTable.js';

const AdminsOnly = () => {
    const { user } = useContext(userContext)

    if (user.usertype === "normal") {
        return (
            <div className="container">
                <div className="row text-center">
                    <h1>You are not authorized to view this page.</h1>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-2">
                        {/* <Link to={`/reviews/edit/${individual._id}`}><button className="m-3">Edit</button></Link>
                        <button onClick={handleOnClick}>Delete</button> */}
                        <Link to={'/addReview'}><button className="m-3">Add</button></Link>
                    </div>
                    <div className='col-10'>
                        <ReviewsList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminsOnly;