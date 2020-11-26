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
      {pokemons.map((el: PokemonsReques) => {
        return (
          <PokemonCard
            name={el.name}
            attack={el.stats.attack}
            defense={el.stats.defense}
            types={el.types}
            key={el.id}
            img={el.img}
          />
        );
      })}
    </div>
  );
};

export default PokemonCardList;
