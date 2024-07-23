
function FoundMovies({ movies }) {
    return (
        <ul>
            {movies.map(movie => {
                return <li key={movie.id}>{movie.title}</li>
            })}
       </ul>
    )
}
export default FoundMovies;

