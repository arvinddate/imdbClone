import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const [movieDetail, setMoviedetail] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieDetail();
  }, [movieId]);
  const fetchMovieDetail = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=1');
      const data = await response.json();
      const movie = data?.results?.find((movie) => movie?.id == movieId);
      setMoviedetail(movie);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1>Movie Detail Page</h1>
      <Banner title={movieDetail.title} description={movieDetail.overview} imageUrl={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`} />

    </div>
  )
}

export default MovieDetailPage
