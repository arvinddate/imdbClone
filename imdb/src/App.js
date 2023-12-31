import { useState } from 'react';
import './App.css';
import Favourites from './Components/Favourites';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MovieDetailPage from './Components/MovieDetailPage';
import MoviePage from './Components/MoviePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddMovie from './Components/AddMovie';
import FavouriteProvider from './context/favourite';
function App() {
  
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <FavouriteProvider>
        <Routes >
          <Route path='/' element={<MoviePage />} />
          <Route path='/favourites' element={ <Favourites  />} />
          <Route path='/details/:movieId' element={<MovieDetailPage/>} />
          <Route path='/add-movie' element={<AddMovie />} />
        </Routes>

        </FavouriteProvider>
       
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
