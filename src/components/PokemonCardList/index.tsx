import React from 'react';
import s from './PokemonCardList.module.scss';
import pokemons from '../../pokemons';
import PokemonCard from '../PokemonCard';

const PokemonCardList = () => {
  return (
    <div className={s.root}>
      {pokemons.map(({ name, stats: { attack, defense }, types, id }) => {
        return <PokemonCard name={name} attack={attack} defense={defense} types={types} key={id} />;
      })}
    </div>
  );
};

export default PokemonCardList;
