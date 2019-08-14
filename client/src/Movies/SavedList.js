import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import MovieList from './MovieList';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <nav>
      <ul>
        <li>
          <NavLink to="MovieList" activeClassName="home-button">
            Home
          </NavLink>
        </li>
        <li className="home-button">Movie List</li>
      </ul>
    </nav>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Route exact path="/" component={MovieList} />
  </div>
);

export default SavedList;
