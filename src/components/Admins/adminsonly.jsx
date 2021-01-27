import React from 'react';
import './adminsonly.css';
import { useContext } from "react";
import { userContext } from "../../context/UserCtx";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewsList from '../ReviewsTable/ReviewsTable.js';

const AdminsOnly = () => {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="text-center">
                        {/* <Link to={`/reviews/edit/${individual._id}`}><button className="m-3">Edit</button></Link>
                            <button onClick={handleOnClick}>Delete</button> */}
                        <Link to={'/addReview'}><button className="m-3">Add</button></Link>
                    </div>
                    <div>
                        <ReviewsList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminsOnly;