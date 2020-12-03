import React from 'react';
import cn from 'classnames';
import { A, navigate, usePath } from 'hookrouter';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import { GENERAL_MENU, LinkEnum } from '../../routes';

const Header = () => {
  const path = usePath();

  return (
    <header className={cn(s.root)}>
      <div className={cn(s.wrap)}>
        <div className={cn(s.pokemonLogo)} onClick={() => navigate(LinkEnum.HOME)}>
          <PokemonLogoSvg />
        </div>
        <nav className={cn(s.menuWrap)}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              href={link}
              className={cn(s.menuLink, {
                [s.activeLink]: link === path,
              })}
              key={title}>
              {title}
            </A>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
