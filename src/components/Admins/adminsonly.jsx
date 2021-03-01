import React from 'react';
import './adminsonly.css';
import { useContext } from "react";
import { userContext } from "../../context/UserCtx";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewsList from '../ReviewsTable/ReviewsTable.js';
import { useHistory, useLocation } from 'react-router-dom'

const AdminsOnly = () => {
    const history = useHistory()
    const { user } = useContext(userContext)

    console.log(user);

    if (!user || user.userType === "normal") {
        history.push('/');
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