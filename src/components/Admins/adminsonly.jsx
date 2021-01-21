import React from 'react';
import './adminsonly.css';
import { useContext } from "react";
import { userContext } from "../../context/UserCtx";
import { Link } from 'react-router-dom';

const AdminsOnly = () => {
    const { user } = useContext(userContext);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {user.userType === "admin" ? (
                        <div className="text-center">
                            {/* <Link to={`/reviews/edit/${individual._id}`}><button className="m-3">Edit</button></Link>
                            <button onClick={handleOnClick}>Delete</button> */}
                            <Link to={'/addReview'}><button className="m-3">Add</button></Link>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default AdminsOnly;