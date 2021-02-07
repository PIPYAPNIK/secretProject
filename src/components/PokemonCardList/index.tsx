import React from 'react';
import s from './PokemonCardList.module.scss';
import PokemonCard from '../PokemonCard';
import { PokemonsReques } from '../../interface/pokemons';

interface IPokemonCardList {
  pokemons: PokemonsReques[];
}

const PokemonCardList: React.FC<IPokemonCardList> = ({ pokemons }) => {
  return (
    <div className={s.root}>
      {pokemons?.map((el: PokemonsReques, i) => {
        return <PokemonCard item={el} index={i} />;
      })}
    </div>
  );
};

export default PokemonCardList;
