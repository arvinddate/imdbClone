import { useState } from 'react';
import './App.css';
import Favourites from './Components/Favourites';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MovieDetailPage from './Components/MovieDetailPage';
import MoviePage from './Components/MoviePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddMovie from './Components/AddMovie';
function App() {
  const [favourites,setFavourites]=useState([]);
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path='/' element={<MoviePage setFavourites={setFavourites} favourites={favourites} />} />
          <Route path='/favourites' element={ <Favourites favourites={favourites} />} />
          <Route path='/details/:movieId' element={<MovieDetailPage/>} />
          <Route path='/add-movie' element={<AddMovie />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
