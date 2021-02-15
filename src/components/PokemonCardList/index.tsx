import React from 'react';
import s from './PokemonCardList.module.scss';
import PokemonCard from '../PokemonCard';
import { PokemonsReques } from '../../interface/pokemons';

interface IPokemonCardList {
  pokemons: PokemonsReques[];
  setCurrentPokemon: any;
  setIsPopUpOpen: any;
}

const PokemonCardList: React.FC<IPokemonCardList> = ({ pokemons, setCurrentPokemon, setIsPopUpOpen }) => {
  return (
    <div className={s.root}>
      {pokemons?.map((el: PokemonsReques, i) => {
        return (
          <PokemonCard
            key={i}
            item={el}
            index={i}
            setCurrentPokemon={setCurrentPokemon}
            setIsPopUpOpen={setIsPopUpOpen}
          />
        );
      })}
    </div>
  );
};

export default PokemonCardList;
