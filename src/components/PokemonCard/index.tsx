import React from 'react';
import Heading from '../Heading';
import cn from 'classnames';
import s from './PokemonCard.module.scss';
import { toCapitalizeWord } from '../../utils/toCapitalizeWord';

interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface IPokemonItem {
  abilities: Array<string>;
  stats: IStats;
  types: Array<string>;
  img: string;
  name: string;
  base_experience: number;
  height?: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

interface IPokemonCard {
  item: IPokemonItem;
  index: number;
  setCurrentPokemon: any;
  setIsPopUpOpen: any;
}

const PokemonCard: React.FC<IPokemonCard> = ({ item, index, setCurrentPokemon, setIsPopUpOpen }) => {
  const { abilities, stats, types, img, name, base_experience, height, id, is_default, order, weight } = item;

  return (
    // @ts-ignore
    <div
      className={cn(s.root, s[`bg-${index + 1}`])}
      onClick={() => {
        setCurrentPokemon(item);
        setIsPopUpOpen(true);
      }}>
      <div className={s.infoWrap}>
        <Heading headingSize={3} className={s.titleName}>
          {toCapitalizeWord(name)}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types?.map((el, i) => {
            return (
              <span className={s.label} key={s.label + i}>
                {toCapitalizeWord(el)}
              </span>
            );
          })}
        </div>
      </div>
      <div className={cn(s.pictureWrap)}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
