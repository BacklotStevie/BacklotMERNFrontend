import './ReviewPage.css';
import React from 'react';
import ReviewsList from '../../components/ReviewPage/reviews';

const ReviewPage = (props) => {
    return (
        // <div className="container-fluid">
        //     <div className="row review-container">
        //         <div className="text-center">
        //             <button className="divider-button bg-dark" disabled></button>
        //             <h1 className="pt-3">Backlot Reviews</h1>
        //         </div>

        //         <div className="">
        //             <ReviewsList />
        //         </div>

        //         <div className="container text-center pt-5">
        //             <button className="divider-button bg-dark mt-4" disabled></button>
        //             <h1 className="pt-3">Collections</h1>
        //             <br />
        //             <h3 className='mt-5'>Coming Soon</h3>
        //         </div>

        //     </div>
        // </div>

        <div className=" container">
            <div className=" row">
                <div className=" text-center col-12">
                    <button className="divider-button bg-dark" disabled></button>
                    <h1 className="p-3">Backlot Reviews</h1>
                </div>
                    <ReviewsList />
                <div className=" text-center col-12">
                    <button className="divider-button bg-dark mt-4" disabled></button>
                    <h1 className="pt-3">Collections</h1>
                </div>
                <div className=" text-center col-12">
                    <h3 className='mt-5'>Coming Soon</h3>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;
