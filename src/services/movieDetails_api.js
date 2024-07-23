function fetchMovieDetails(movie_id) {
    const API_KEY = 'e90c4b52206cd75de7766fe2bd804e32';

     return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&api_key=${API_KEY}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
                
             return Promise.reject(
                new Error('Детальної інформації не знайдено!!!'),)
        })
         .catch(error => { return error })
              
}

export default fetchMovieDetails;