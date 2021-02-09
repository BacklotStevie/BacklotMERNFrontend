import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddReview() {
    const [article, setArticle] = useState({
        title: "",
        writer: "",
        img: "",
        tags: "",
    })

    const [reviews, setReviews] = useState([{ heading1: " ", info1: " " }]);

    let [counter, setCounter] = useState(1)

    function handleArticleChange(event) {
        setArticle({
            ...article,
            [event.target.name]: event.target.value
        })
    }


    function handleReviewChange(event, index) {
        event.preventDefault();
        let reviewsCpy = [...reviews];
        let review = reviewsCpy[index];
        review = {
            ...review,
            [event.target.name]: event.target.value
        }
        setReviews(reviewsCpy);
    }


    function addReviewHandler(event) {

        let combined = {
            ...article,
            reviews: reviews
        }

        event.preventDefault();
        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_BASE_URL}/reviews/writeReview`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            data: { combined }
        };
        axios(config)
            .then((response) => {

            })
            .catch((error) => {

            });

    }
    function addAnotherReview() {
        let reviewsCp = [...reviews];
        let newObj = {};
        newObj[`heading${counter}`] = ""
        newObj[`info${counter}`] = ""
        reviewsCp.push(newObj)
        setReviews(reviewsCp)
        setCounter(counter++)
    }

    function removeAReview(index) {

    }
    return (
        <div className="container-fluid">
            <form onSubmit={addReviewHandler} className="max-auto m-5">
                <input className="col-12 m-2" type="text" name="title" value={article.title} placeholder="title" onChange={handleArticleChange}></input>
                <input className="col-12 m-2" type="text" name="writer" value={article.writer} placeholder="writer" onChange={handleArticleChange}></input>
                <input className="col-12 m-2" type="text" name="tags" value={article.tags} placeholder="tags" onChange={(e) => setArticle({ ...article, tags: e.target.value.split(",") })}></input>

                {reviews ? reviews.map((review, index) => <div key={Math.random()}>
                    <input className="col-12 m-2" type="text" name={`heading${counter}`} value={reviews[index].heading} placeholder="headings" onChange={(e) => handleReviewChange(e, index)}></input>
                    <textarea className="col-12 m-2" name={`info${counter}`} value={reviews[index].info} placeholder="body text" onChange={(e) => handleReviewChange(e, index)}></textarea>
                    <button>Remove</button>
                </div>)
                    :
                    <></>
                }

                <button onClick={addAnotherReview}>Add Another Review</button>
                <input className="col-12 m-2" type="text" name="img" value={article.img} placeholder="images" onChange={handleArticleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddReview;