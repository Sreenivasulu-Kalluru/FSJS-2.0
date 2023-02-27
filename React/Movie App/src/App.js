import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([  {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGY5NDYzMTEtODRiMC00NDkwLWE4NzEtNjY3ZmE4MDhhYWFjXkEyXkFqcGdeQXVyNTAwNDc0NTQ@._V1_SX300.jpg',
      Title: 'Vinaro Bhagyamu Vishnu Katha',
      Type: 'movie',
      Year: '2023',
    },
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZjA4ZDJmNmQtZTA4NS00NzhmLTg2ODktZjg3MDliZmUzYTZmXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_SX300.jpg',
      Title: 'Pushpa: The Rise - Part 1',
      Type: 'movie',
      Year: '2021',
    },
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYjUyZGY4NDQtOGE5My00M2EzLWE0ZGEtMmQwNTgxNjBmYmUxXkEyXkFqcGdeQXVyMTU4MjkxODU@._V1_SX300.jpg',
      Title: 'MalliRaava',
      Type: 'movie',
      Year: '2017',
    },
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMWNlYjc4MzItMzc1NC00YTg3LWJlMTEtNWNkM2ZkMmFmYWRkXkEyXkFqcGdeQXVyODI0NDg5NjU@._V1_SX300.jpg',
      Title: 'Kirrak Party',
      Type: 'movie',
      Year: '2018',
    },]);
  const [searchValue, setSearchValue] = useState('');

  const getMoviesRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    console.log(responseJSON);
    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid">
      <div className="container-h row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="movie-container">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
