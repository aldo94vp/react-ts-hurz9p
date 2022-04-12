import React, { useState, useCallback, useEffect } from 'react';
import PokemonDetails, {
  PokemonAbilitie,
  PokemonType,
} from './pokemon-details.tsx';
import './pokemon.css';

interface PokemonProps {
  name: string;
  sprite: string;
  abilities: PokemonAbilitie[];
  types: PokemonType[];
}
const Pokemon: React.FC<PokemonProps> = ({
  name,
  sprite,
  abilities,
  types,
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const openDetails = useCallback(() => {
    setIsDetailsOpen(true);
  }, []);
  const closeDetails = useCallback(() => {
    setIsDetailsOpen(false);
  }, []);

  useEffect(() => console.log(abilities, types), []);

  return (
    <div onClick={openDetails} className="pokemon">
      <h3>{name}</h3>
      <img src={sprite} alt="" />
      <PokemonDetails abilities={abilities} types={types} />
    </div>
  );
};

export default Pokemon;
