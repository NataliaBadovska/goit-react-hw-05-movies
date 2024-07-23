import { useEffect,useState } from 'react';
import { useSearchParams } from "react-router-dom";
import SearchMovieApi from 'services/searchMovie_api';
import FoundMovies from '../components/FoundMovies/FoundMovies'

const inputStyle = {
    marginRight: 5,
}

function Movies() {
    
    const [foundMovies, setFoundMovies] = useState([])
    const [showMovies, setShowMovies] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const nameMovie = searchParams.get('query') ?? '';

    useEffect(() => {
        setFoundMovies([]);

        if (showMovies) {
            SearchMovieApi(nameMovie).then(movies => setFoundMovies(movies.results));
        }
        setShowMovies(false);

    }, [nameMovie, showMovies])
    
    const updateQueryString = (evt) => {
        const { value } = evt.target;

        if (value === '') {
            return  setSearchParams({})
        }
        setSearchParams({query: value.toLowerCase()})
    }
    
    return (
        <>
            <input
                style={inputStyle}
                type="text"
                autoComplete="off"
                autoFocus
                value={nameMovie}
                onChange={updateQueryString}
            >
            </input>
    
            <button
                type="button"
                onClick={()=> setShowMovies(true)}>
                <span>Search</span>
            </button>

            <FoundMovies movies={foundMovies} />
        </>
    )
}

export default Movies;

