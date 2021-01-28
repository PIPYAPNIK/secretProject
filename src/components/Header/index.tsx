import React from 'react';
import cn from 'classnames';
// @ts-ignore
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
        <div className="hamburger-menu">
          <input id={s['menu__toggle']} type="checkbox" />
          <label className={s['menu__btn']} htmlFor={s['menu__toggle']}>
            <span></span>
          </label>

          <ul className={s['menu__box']}>
            <li>
              <div className={cn(s.pokemonLogo)} onClick={() => navigate(LinkEnum.HOME)}>
                <PokemonLogoSvg />
              </div>
            </li>
            {GENERAL_MENU.map(({ title, link }) => (
              <li className={s['menu__item']}>
                <A
                  href={link}
                  className={cn(s.menuLink, {
                    [s.activeLink]: link === path,
                  })}
                  key={title}>
                  {title}
                </A>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
