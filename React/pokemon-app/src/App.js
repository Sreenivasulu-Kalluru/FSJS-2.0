import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import PokeCard from './PokeCard';
import LoadingSpinner from './LoadingSpinner';

const App = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = `https://pokeapi.co/api/v2/pokemon/${query}`;

  const getPokemon = async () => {
    try {
      setLoading(true);
      const result = await Axios.get(url);
      setPokemon([result.data]);
      console.log(result.data);
      setLoading(false);
    } catch (error) {
      // setPokemon(false);
      alert('Could not find Pokemon😢, Try again!');
      setLoading(false);
      console.error(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  return (
    <div className="app">
      <img
        className="logo"
        src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png"
        alt="pokemon-logo"
      />
      <form className="app-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="app-input"
          placeholder="Search Pokemon by id or name..."
          value={query.toLowerCase()}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" onClick={getPokemon} className="app-submit">
          Get
        </button>
      </form>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="app-poke-container">
          {pokemon?.map((pokeItem, index) => {
            return <PokeCard key={index} poke={pokeItem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
