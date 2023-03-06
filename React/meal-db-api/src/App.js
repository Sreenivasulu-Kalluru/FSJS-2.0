import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import MealCard from './MealCard';

const App = () => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const getMeals = async () => {
    try {
      setLoading(true);
      const result = await Axios.get(url);
      if (!result.ok) throw Error('Meal not found! Please Try again');
      setMeals(result.data.meals);
      console.log(result.data.meals);
      setLoading(false);
      setFetchError(null);
    } catch (err) {
      // setMeals(false);
      // alert('Could not find meal😢, Try again!');
      setLoading(false);
      console.error(err);
      setFetchError(err.message);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getMeals();
  };

  return (
    <div className="app">
      <h1>Meal DB API</h1>
      <p className="description">
        Welcome to <strong>TheMealDB</strong>: An open, crowd-sourced database
        of <strong>Recipes from around the world</strong>
      </p>
      <form className="app-form" onSubmit={onSubmit}>
        <input
          autoFocus
          type="text"
          className="app-input"
          placeholder="Search Meal..."
          value={query.toLowerCase()}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" onClick={getMeals} className="app-submit">
          Search
        </button>
      </form>
      {loading ? (
        <p className="app-loading">Loading...</p>
      ) : (
        <div className="app-meal-container">
          {meals?.map((mealItem, index) => {
            return <MealCard key={index} meal={mealItem} />;
          })}
        </div>
      )}
      {fetchError && (
        <p
          className="error"
          style={{ color: 'red', margin: '0 auto' }}
        >{` ${fetchError}`}</p>
      )}
    </div>
  );
};

export default App;
