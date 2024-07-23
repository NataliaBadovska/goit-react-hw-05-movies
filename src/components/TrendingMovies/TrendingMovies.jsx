import { Link  } from "react-router-dom";
import { useEffect, useState } from 'react';
import trendingMovies from '../../services/trendingMovies_api';
import css from './TrendingMovies.module.css'

function TrendingMovies() {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        setStatus('pending')

        trendingMovies()
            .then(movies => setMovies(movies.results), setStatus('resolved'))
       
    },[status])


    if (status === 'pending') {
        return <div>...Завантаження...</div >
    
    }
    
    if (status === 'resolved') {
        return (
            <ul className={css.trendingMovies}>
                {movies.map(movie =>
                {
                    return <li key={movie.id} className={css.trendingMovies}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                })}
            </ul>
        )
    }
}


export default TrendingMovies;