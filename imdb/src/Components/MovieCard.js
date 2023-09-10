import React, { useContext } from 'react'
import { Link, } from 'react-router-dom'
import { FavouriteContext } from '../context/favourite'

const MovieCard = ({movie}) => {
  const {setFavourites}= useContext(FavouriteContext);

    const handleFavouriteClick=()=>{
        setFavourites((prevMovies)=>[...prevMovies,movie]);
    }
    
  return (
    <div className="movie-card" style={ {backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`} }>
        <h3><Link to={`/details/${movie?.id}`}>{movie?.title}</Link></h3>
        <button onClick={handleFavouriteClick}>Add To Favourit</button>
      
    </div>
  )
}

export default MovieCard
