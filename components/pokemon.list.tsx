import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './pokemon';
import { API_URL } from '../data/constants';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemonsData = await axios.get(`${API_URL}?limit=10&offset=0`);
      const individualPokemonsData = pokemonsData.data.results.map(
        (pokemon) => {
          return axios.get(`${pokemon.url}`);
        }
      );
      const individualPokemonsDataFetched = await Promise.all(
        individualPokemonsData
      );
      setPokemons(
        individualPokemonsDataFetched.map((pokemon: any) => pokemon.data)
      );
    })();
  }, []);

  return (
    <React.Fragment>
      {pokemons?.map(({ name, sprites, abilities, types }) => (
        <Pokemon
          name={name}
          sprite={sprites.front_default}
          abilities={abilities}
          types={types}
        />
      ))}
    </React.Fragment>
  );
};

export default PokemonList;
