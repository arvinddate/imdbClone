import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage, setMoviePageStore } from '../store/productReducer';
//import {movies as movieData} from '../mockData/movieData'
const MovieList = () => {
    //const [movies,setMovies]=useState();
    // const [activePage ,setActivePage] = useState(0);
    // const [moviePageStore ,setMoviePageStore]=useState({});
    const {activePage, moviePageStore} = useSelector((state)=>state.products);
    useEffect(() => {
        fetchMovieData();
    }, [activePage]);
    const dispatch = useDispatch();
    const fetchMovieData = async () => {
        //dispatch(setActivePage(pageNumber));
        const pageWiseMovie = moviePageStore[activePage];
        if(pageWiseMovie){
           //setMovies(pageWiseMovie);
           //setActivePage(pageNumber)
           return;

        }else{
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${activePage}`);
                const data = await response.json();
                dispatch(setMoviePageStore(data));
                //setMovies(data);

                // setMoviePageStore((prevValue)=>{
                //     return {
                //         ...prevValue,
                //         [pageNumber]:data
                //     }

                // });

                //setActivePage(pageNumber);
            } catch (error) {
                console.error(error);
            }

        }

        
    }
    
    return (
    <div className='movie-list'>

        {
            moviePageStore[activePage]?.results?.map((movie,idx)=>{
                return (<MovieCard    movie={movie} />);
            })
        }
        {
            moviePageStore[activePage]?.total_pages &&
            (<Pagination totalPages={moviePageStore[activePage]?.total_pages}  />)
        }
      

    </div>
  )
}

export default MovieList
