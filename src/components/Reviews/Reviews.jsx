import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewsApi from 'services/reviews_api';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        ReviewsApi(movieId).then(review => setReviews(review.results))
    }, [movieId])

    if (reviews.length !== 0 ) {
        return (
            <ul>
                {reviews.map(review => 
                { 
                    return < li key={review.id}>
                        <h2>Author: {review.author}</h2>
                        <p>{review.content}</p>
                    </li>
                })}
             </ul>)
    }

    return (
        <h3>WE don't have any reviews for this movie</h3>
    )
}

export default Reviews;

