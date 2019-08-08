import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

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
          <Route exact path="/" component={MovieList} />
          <Route path="/Movie/movies/:id" />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
