import React, { useState } from 'react';
import { IPokemonItem } from '../PokemonCard';
import { toCapitalizeWord } from '../../utils/toCapitalizeWord';
import Heading from '../Heading';
import s from './PopUpCard.module.scss';
import cn from 'classnames';

export interface IPokemonPopUp {
  pokemon: any;
  isOpen: boolean;
  setIsPopUpOpen: any;
}

const maxHpPrc = 255 / 100;
const maxExpProc = 608 / 100;

const PopUpCard: React.FC<IPokemonPopUp> = ({ pokemon, isOpen, setIsPopUpOpen }) => {
  return (
    <div
      className={cn(s.root, {
        [s.active]: isOpen,
      })}>
      <div className={s.popUpClose} onClick={() => setIsPopUpOpen(false)}>
        Close
      </div>
      <div className={s.cardWrap}>
        <div className={s.imageBlock}>
          <div>
            <div>
              <img src={pokemon?.img} alt={pokemon?.name} />
            </div>
            <div className={s.typeRow}>
              {pokemon?.types?.map((el: string, i: number) => {
                return <span key={el + i}>{toCapitalizeWord(el)}</span>;
              })}
            </div>
          </div>
        </div>
        <div className={s.descBlock}>
          <div className={s.topBlock}>
            <Heading headingSize={2}>{toCapitalizeWord(pokemon.name ? pokemon.name : 'test')}</Heading>
            <div className={s.abilities}>
              <p className={s.title}>Abilities</p>
              <p className={s.subtitle}>
                {toCapitalizeWord(pokemon?.abilities ? pokemon?.abilities[0] : 't') +
                  '' +
                  toCapitalizeWord(pokemon?.abilities?.length > 1 ? pokemon?.abilities[1] : '')}
              </p>
            </div>
          </div>
          <div className={s.middleBlock}>
            <div>
              <p className={s.title}>Healthy Points</p>
              <p>{pokemon?.stats?.hp}</p>
              <span
                style={{
                  width: `${pokemon?.stats?.hp / maxHpPrc}%`,
                }}>
                Metric
              </span>
            </div>
            <div>
              <p className={s.title}>Experience</p>
              <p>{pokemon?.base_experience}</p>
              <span
                style={{
                  width: `${pokemon?.base_experience / maxExpProc}%`,
                }}>
                Metric
              </span>
            </div>
          </div>
          <div className={s.bottomBlock}>
            <div>
              <span>{pokemon?.stats?.defense}</span>
              <span>Defense</span>
            </div>
            <div>
              <span>{pokemon?.stats?.attack}</span>
              <span>Attack</span>
            </div>
            <div>
              <span>{pokemon?.stats ? pokemon?.stats['special-attack'] : ''}</span>
              <span>Sp Attack</span>
            </div>
            <div>
              <span>{pokemon?.stats ? pokemon?.stats['special-defense'] : ''}</span>
              <span>Sp Defense</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpCard;
