function fetchTrendingMovies() {
    const API_KEY = 'e90c4b52206cd75de7766fe2bd804e32';
    // return fetch(`https://api.themoviedb.org/3/trendin/movie/day?language=en-US&api_key=${API_KEY}`)
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            
             return Promise.reject(
                new Error('Нічого не знайдено!!!'))
        })
                
}
    
export default fetchTrendingMovies;