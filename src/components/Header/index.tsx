import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Header = () => {
  return (
    <header className={cn(s.root)}>
      <div className={cn(s.wrap)}>
        <div className={cn(s.pokemonLogo)}>
          <PokemonLogoSvg />
        </div>
        <nav className={cn(s.menuWrap)}>
          {MENU.map(({ id, value, link }) => (
            <Link to={link} className={cn(s.menuLink)} key={id}>
              {value}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
