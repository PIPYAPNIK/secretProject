import React, { useState } from 'react';
import { IPokemonItem } from '../PokemonCard';
import s from '../PokemonCard/PokemonCard.module.scss';
import { toCapitalizeWord } from '../../utils/toCapitalizeWord';
import Heading from '../Heading';

interface IPokemonPopUp {
  pokemon: IPokemonItem;
}

const PopUpCard: React.FC<IPokemonPopUp> = ({ pokemon }) => {
  const { abilities, stats, types, img, name, base_experience, height, id, is_default, order, weight } = pokemon;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(false)}>Close</div>
      <div>
        <div>
          <div>
            <div>
              <img src={img} alt={name} />
            </div>
            <div>
              {types.map((el, i) => {
                return <span key={el + i}>{toCapitalizeWord(el)}</span>;
              })}
            </div>
          </div>
        </div>
        <div>
          <Heading>{toCapitalizeWord(name)}</Heading>
          <div>
            <p>Abilities</p>
            <p>
              {toCapitalizeWord(abilities[0])}-{toCapitalizeWord(abilities[1])}
            </p>
          </div>
        </div>
        <div>
          <div>
            <p>Healthy Points</p>
            <p>{stats.hp}</p>
          </div>
          <div>
            <p>Experience</p>
            <p>{base_experience}</p>
          </div>
        </div>
        <div>
          <div>
            <span>{stats.defense}</span>
            <span>Defense</span>
          </div>
          <div>
            <span>{stats.attack}</span>
            <span>Attack</span>
          </div>
          <div>
            <span>{stats['special-attack']}</span>
            <span>Sp Attack</span>
          </div>
          <div>
            <span>{stats['special-defense']}</span>
            <span>Sp Defense</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpCard;
