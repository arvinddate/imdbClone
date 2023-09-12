import React, { useContext } from 'react'
import { Link, } from 'react-router-dom'
import { FavouriteContext } from '../context/favourite'
import { useDispatch } from 'react-redux';
import { setFavourites } from '../store/favouriteReducer';

const MovieCard = ({ movie }) => {
  //const { setFavourites } = useContext(FavouriteContext);
  const dispatch =useDispatch();
  const handleFavouriteClick = () => {
    //setFavourites((prevMovies) => [...prevMovies, movie]);
    dispatch(setFavourites(movie));
  }

  return (
    <div className="movie-card" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` }}>
      <h3><Link to={`/details/${movie?.id}`}>{movie?.title}</Link></h3>
      <button onClick={handleFavouriteClick}>Add To Favourit</button>

    </div>
  )
}

export default MovieCard
