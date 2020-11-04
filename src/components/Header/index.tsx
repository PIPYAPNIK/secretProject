import React from 'react';
import cn from 'classnames';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={cn(s.header)}>
      <div className={cn(s.content)}>
        <div className={cn(s.header__logo)}>
          <a href="/">
            <img src="../../../public/images/Logo.png" alt="logo" />
          </a>
        </div>
        <nav className={cn(s.header__navigation)}>
          <ul className={cn(s.navigation__items)}>
            <li className={cn(s.navigation__item)}>
              <a href="/">Home</a>
            </li>
            <li className={cn(s.navigation__item)}>
              <a href="/">Pokédex</a>
            </li>
            <li className={cn(s.navigation__item)}>
              <a href="/">Legendaries</a>
            </li>
            <li className={cn(s.navigation__item)}>
              <a href="/">Documentation</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
