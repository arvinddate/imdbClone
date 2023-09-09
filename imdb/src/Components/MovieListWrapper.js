import MovieHeading from "./MovieHeading"
import MovieList from "./MovieList"

const MovieListWrapper=({setFavourites,favourites})=>{
    return(
        <div className="movie-list-wrapper">
            <div className="container">
               

            <MovieHeading />
            < div className="movie-list-grid">
            <MovieList  setFavourites={setFavourites} favourites={favourites}/>
            </div>
            

            </div>
            
        </div>

    )
}
export default MovieListWrapper;