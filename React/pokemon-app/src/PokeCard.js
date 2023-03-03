import React from 'react';
import './PokeCard.css';

const PokeCard = ({ poke }) => {
  return (
    <div className="poke-card">
      <div className="poke-card-left">
        {/* <div></div> */}
        <img
          className="poke-card-img"
          src={poke.sprites.other.dream_world.front_default}
          alt={poke.name[0].toUpperCase() + poke.name.slice(1).toLowerCase()}
        />
        <p className="poke-card-id">
          Id: #{poke.id.toString().padStart(3, '0')}
        </p>
        <h2 className="poke-card-title">
          {poke.name[0].toUpperCase() + poke.name.slice(1).toLowerCase()}
        </h2>
        <h3>
          Type:{' '}
          {poke.types[0].type.name[0].toUpperCase() +
            poke.types[0].type.name.slice(1).toLowerCase()}
        </h3>
      </div>

      <div className="poke-card-right">
        <h2>Characteristics: </h2>
        <h3 className="poke-card-speices">
          Speices:{' '}
          {poke.species.name[0].toUpperCase() +
            poke.species.name.slice(1).toLowerCase()}
        </h3>
        <h3 className="poke-card-height">
          Height: {poke.height} <em>ft</em>
        </h3>
        <h3 className="poke-card-weight">
          Weight: {poke.weight} <em>kgs</em>
        </h3>
        <h3>
          Speed: {poke.stats[5].base_stat} <em>kmph</em>
        </h3>
        <h3>
          Horse Power: {poke.stats[0].base_stat} <em>hp</em>
        </h3>
        <h3>Attack: {poke.stats[1].base_stat}</h3>
        <h3>Defense: {poke.stats[2].base_stat}</h3>
        <h3>Special-Attack: {poke.stats[3].base_stat}</h3>
        <h3>Special-Defense: {poke.stats[4].base_stat}</h3>
      </div>
    </div>
  );
};

export default PokeCard;
