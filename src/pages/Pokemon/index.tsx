import React from 'react';
import useData from '../../hook/getData';
import { PokemonsReques } from '../../interface/pokemons';

export interface IPokemonPage {
  id: number | string | undefined;
}

const Pokemon: React.FC<IPokemonPage> = ({ id }) => {
  const { data } = useData<PokemonsReques>('getPokemon', { id });
  return <div>{data.name}</div>;
};

export default Pokemon;
