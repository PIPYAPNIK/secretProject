import React from 'react';
import Heading from '../Heading';
import s from './PokemonCard.module.scss';

interface IPokemonCard {
  name: string;
  attack: number;
  defense: number;
  types: Array<string>;
}

const PokemonCard: React.FC<IPokemonCard> = ({ name, attack, defense, types }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading headingSize={3} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>{types[0]}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="Charmander"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
