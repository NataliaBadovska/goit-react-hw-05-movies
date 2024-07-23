import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import MovieDetails_api from "../../services/movieDetails_api";
import css from './MovieDetailsComponent.module.css'

function MovieDetailsComponent() {
    const [detais, setDetails] = useState(null);
    const [status, setStatus] = useState('idle');
    const { movieId } = useParams();

    useEffect(() => {
        setStatus('pending')
        
        MovieDetails_api(movieId).then(movieInfo=> setDetails(movieInfo), setStatus('resolved')) ;
    }, [movieId])

    
    
    if (status === 'pending') {
        return <div>...Завантаження...</div >
    }

    if (status === 'resolved' && detais !== null) {
        
        return (
            <div className={css.details}>
                <div className={css.posterBox}>
                    <img src='' alt={detais.original_title} className={css.poster}/>
                </div>
                <div>
                    <h2>{detais.original_title} ({detais.release_date.slice(0, 4)})</h2>
                    <p>User Score: {Math.round(detais.vote_average)}%</p>
                    <h3>Overview</h3>
                    <p>{detais.overview}</p>
                    <h3>Genres</h3>
                    <ul className={css.list}>
                        {detais.genres.map(genre => <li key={genre.id} className={css.genre}>{genre.name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MovieDetailsComponent;