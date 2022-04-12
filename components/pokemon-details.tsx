import React from 'react';

interface CommonInterface {
  name: string;
  url: string;
}
export interface PokemonAbilitie {
  ability: CommonInterface;
  is_hidden: boolean;
  slot: number;
}
export interface PokemonType {
  type: CommonInterface;
  slot: number;
}
interface PokemonDetailsProp {
  abilities: PokemonAbilitie[];
  types: PokemonType[];
}
const PokemonDetails: React.FC<PokemonDetailsProp> = ({ abilities, types }) => {
  return (
    <div>
      {abilities.map((item) => (
        <React.Fragmen>
          <span>{item.ability.name}</span>
        </React.Fragmen>
      ))}
      {types.map((item) => (
        <React.Fragmen>
          <span>{item.type.name}</span>
        </React.Fragmen>
      ))}
    </div>
  );
};

export default PokemonDetails;
