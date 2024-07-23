import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import ButtonGoBack from 'components/buttonGoBack/ButtonGoBack'
import MovieDetailsComponent from '../components/MovieDetailsComponent/MovieDetailsComponent';

function MovieDetails() {
    return (
         <>
            <ButtonGoBack/>
            <MovieDetailsComponent />
            <div > 
                <h3>Additional information</h3>
                <ul>
                    <li> <Link to="cast">Cast</Link></li>
                    <li> <Link to="reviews">Reviews</Link></li>
                </ul>
            </div>
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
           </Suspense>
            
        </>
    )
}

export default MovieDetails;