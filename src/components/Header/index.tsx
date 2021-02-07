import React, { useState } from 'react';
import cn from 'classnames';
// @ts-ignore
import { A, navigate, usePath } from 'hookrouter';
import s from './Header.module.scss';
// @ts-ignore
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import { GENERAL_MENU, LinkEnum } from '../../routes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <div
          className={cn(s['hamburger-menu'], {
            [s.open]: isMenuOpen,
          })}>
          <input
            id={s['menu__toggle']}
            type="checkbox"
            onChange={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
          <label className={s['menu__btn']} htmlFor={s['menu__toggle']}>
            <span></span>
          </label>

          <ul className={s['menu__box']}>
            <li>
              <div
                className={cn(s.pokemonLogo)}
                onClick={() => {
                  navigate(LinkEnum.HOME);
                  setIsMenuOpen(false);
                }}>
                <PokemonLogoSvg />
              </div>
            </li>
            {GENERAL_MENU.map(({ title, link }, i) => (
              <li className={s['menu__item']} key={title}>
                <A
                  href={link}
                  className={cn(s.menuLink, {
                    [s.activeLink]: link === path,
                  })}
                  key={title}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}>
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
