import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { FavouriteContext } from '../context/favourite';
let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
};
const Favourites = () => {
    const {favourites} =useContext(FavouriteContext);
    const [favouriteList , setFavouriteList]= useState(favourites);
    const [selectedGenreId ,setSelectedGenreId]= useState();
    const [searchedFavoutites , setSearchedFavourites]=useState(favourites);
  
    const genres = useMemo(()=>Array.from(new Set(favourites.map((favourite) => favourite.genre_ids[0]))),[favourites]);

    const handleSearch= useCallback((e)=>{
        const searchText=e.target.value;
        setFavouriteList(()=>{
            const filteredFavList = searchedFavoutites.filter((movie)=>movie.title.toLowerCase().includes(searchText));
            return filteredFavList;
        })


    },[searchedFavoutites]);
    const filterFavourites = useCallback((genreId)=>{
        setSearchedFavourites(()=>{
            const filteredFavList = genreId ? favourites.filter((movie)=>movie.genre_ids[0]===genreId): favourites;
            setFavouriteList(filteredFavList);
            return filteredFavList;
        })

    },[favourites])
    const handleSort=useCallback((type)=>{
        setFavouriteList(()=>{
            const filteredFavList = [...searchedFavoutites].sort((a,b)=>  type==='asc'? a.popularity -b.popularity: b.popularity - a.popularity  );
            return filteredFavList;
        })
    },[searchedFavoutites])
    return (
        <div className='favourite-page'>
            <h1>Favourite</h1>
            <div className='wrapper'>
                <div className='left-section'>
                    <div className='genres-wrapper'>
                        <ul>
                            <li className={!selectedGenreId ? 'selected':''} onClick={()=> {setSelectedGenreId();filterFavourites()}}>All Genres</li>
                            {genres?.map((genreId) => {
                                return <li className={selectedGenreId ===genreId ? 'selected':''} onClick={()=> {setSelectedGenreId(genreId); filterFavourites(genreId)} }key={genreId}>{genreids[genreId]}</li>;
                            })}
                        </ul>

                    </div>

                </div>
                <div className='right-section'>
                    <input type='search' onChange={handleSearch} placeholder='Search By title' />
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th><button onClick={()=>handleSort('dec')}>^</button>Popularity<button onClick={()=>handleSort('asc')}>v</button></th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                favouriteList?.map(favourite => {
                                    return (
                                        <tr>
                                            <td><img width="60px" src={`https://image.tmdb.org/t/p/original${favourite.poster_path}`} alt='Banner'></img></td>
                                            <td>{favourite.title}</td>
                                            <td>{genreids[favourite.genre_ids[0]]}</td>
                                            <td>{favourite.popularity}</td>
                                            <td>{favourite.vote_average}</td>
                                            <td><button>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Favourites
