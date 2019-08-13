import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from './MovieList';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    <nav>
      <ul>
        <li className="home-button">Movie List</li>
      </ul>
    </nav>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
  </div>
);

export default SavedList;
