import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination';
//import {movies as movieData} from '../mockData/movieData'
const MovieList = () => {
    const [movies,setMovies]=useState();
    const [moviePageStore ,setMoviePageStore]=useState({});

    useEffect(() => {
        fetchMovieData();
    }, []);
    const fetchMovieData = async (pageNumber=1) => {
        const pageWiseMovie = moviePageStore[pageNumber];
        if(pageWiseMovie){
            setMovies(pageWiseMovie);

        }else{
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${pageNumber}`);
                const data = await response.json();
                setMovies(data);
                setMoviePageStore((prevValue)=>{
                    return {
                        ...prevValue,
                        [pageNumber]:data
                    }

                });
            } catch (error) {
                console.error(error);
            }

        }

        
    }
    
    return (
    <div className='movie-list'>

        {
            movies?.results?.map((movie,idx)=>{
                return (<MovieCard    movie={movie} />);
            })
        }
        {
            movies?.total_pages &&
            (<Pagination totalPages={movies?.total_pages} fetchMovieData={fetchMovieData} />)
        }
      

    </div>
  )
}

export default MovieList
