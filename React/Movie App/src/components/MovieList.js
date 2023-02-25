import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie-card" key={index}>
          <img src={movie.Poster} alt="Movie" />
          <div className="movie-info">
            <h3>{movie.Title}</h3>
            <h5>Release Year: {movie.Year}</h5>
            <h5>Type : {movie.Type}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
