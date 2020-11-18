import React from 'react';
import s from './PokemonCardList.module.scss';
import PokemonCard from '../PokemonCard';

interface IPokemonCardList {
  pokemons: Array<object>;
}

const PokemonCardList: React.FC<IPokemonCardList> = ({ pokemons }) => {
  return (
    <div className={s.root}>
      {pokemons.map((el) => {
        // @ts-ignore
        return (
          <PokemonCard
            name={el.name}
            attack={el.stats.attack}
            defense={el.stats.defense}
            types={el.types}
            key={el.id}
          />
        );
      })}
    </div>
  );
};

export default PokemonCardList;
