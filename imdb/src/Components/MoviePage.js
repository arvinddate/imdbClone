import React from 'react'
import Banner from './Banner'
import MovieListWrapper from './MovieListWrapper'

const MoviePage = ({setFavourites,favourites}) => {
  return (
    <>
        <Banner title={"Don't Breathe 2"} description={"The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her."} imageUrl={"'https://image.tmdb.org/t/p/original/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg'"}/>
        <MovieListWrapper setFavourites={setFavourites} favourites={favourites} />
    </>
  );
}

export default MoviePage
