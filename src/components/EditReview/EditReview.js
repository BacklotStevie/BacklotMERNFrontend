import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditReview.css'
import { useHistory } from 'react-router-dom';


function EditReview(props) {
    const [article, setArticle] = useState({
        title: "",
        writer: "",
        img: "",
    })

    const history = useHistory()

    const [reviews, setReviews] = useState([{
        heading: "",
        info: "",
    }])

    function handleArticleChange(event) {
        setArticle({
            ...article,
            [event.target.name]: event.target.value
        })
    }

    function handleReviewChange(event, index) {
        let reviewsCopy = [...reviews]
        let reviewObjectCopy = { ...reviewsCopy[index] }

        reviewObjectCopy[event.target.name] = event.target.value;
        reviewsCopy[index] = reviewObjectCopy;

        setReviews(reviewsCopy);
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/reviews/${props.match.params.id}`)
            .then((response) => {

                setArticle(response.data)
                setReviews(response.data.reviews)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function editReviewHandler(event) {

        let combined = {
            ...article,
            reviews: reviews
        }


        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_BASE_URL}/reviews/update/${props.match.params.id}`, combined)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const handleOnClick = () => {
        axios.delete(`${process.env.REACT_APP_API_BASE_URL}/reviews/${props.match.params.id}`)
            .then((res) => {
                console.log(res)
                history.push("/reviews")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function addAnotherReview() {
        let reviewsCp = [...reviews];
        reviewsCp.push({ heading: "", info: "" })
        setReviews(reviewsCp)
    }

    return (
        <div className="container-fluid">
            <form onSubmit={editReviewHandler} className="max-auto m-5">
                <input className="col-12 m-2" type="text" name="title" value={article.title} placeholder="title" onChange={handleArticleChange}></input>
                <input className="col-12 m-2" type="text" name="writer" value={article.writer} placeholder="writer" onChange={handleArticleChange}></input>

                {reviews ? reviews.map((review, index) =>
                    <div key={index}>
                        <input className="col-12 m-2" type="text" name="heading" value={review.heading} placeholder="headings" onChange={(e) => handleReviewChange(e, index)}></input>
                        <textarea className="col-12 m-2" name="info" value={reviews[index].info} placeholder="body text" onChange={(e) => handleReviewChange(e, index)}></textarea>
                    </div>)
                    :
                    <></>
                }

                <input className="col-12 m-2" type="text" name="img" value={article.img} placeholder="images" onChange={handleArticleChange}></input>
                <button onClick={addAnotherReview}>Add Another Review</button>
                <button type="submit">Submit</button>
                <button onClick={handleOnClick}>Delete</button>
            </form>
        </div>
    )
}

export default EditReview;