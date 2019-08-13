import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Link } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />

      <div className="movie-card">
        <BrowserRouter>
          <Link to={'/'} className="home-button">
            Home
          </Link>
          <Route exact path="/" render={props => <MovieList {...props} />} />
          <Route path="/movie/:id" render={props => <Movie {...props} />} />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
