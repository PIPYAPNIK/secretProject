import React from 'react';
import s from './PokemonCardList.module.scss';
import PokemonCard from '../PokemonCard';
import { IPokemon } from '../../pokemonType';

interface IPokemonCardList {
  pokemons: Array<IPokemon>;
}

const PokemonCardList: React.FC<IPokemonCardList> = ({ pokemons }) => {
  return (
    <div className={s.root}>
      {pokemons.map((el: IPokemon) => {
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
