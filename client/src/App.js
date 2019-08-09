import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import Home from './Movies/Home';

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
          <Route exact path="/" component={Home} />
          <Route path="/MovieList" component={MovieList} />
          <Route path="/movie/:id" component={Movie} />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
