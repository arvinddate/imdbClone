import MovieHeading from "./MovieHeading"
import MovieList from "./MovieList"

const MovieListWrapper=()=>{
    return(
        <div className="movie-list-wrapper">
            <div className="container">
               

            <MovieHeading />
            < div className="movie-list-grid">
            <MovieList  />
            </div>
            

            </div>
            
        </div>

    )
}
export default MovieListWrapper;