import React from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries';
import Documentation from './pages/Documentation';

interface IMenu {
  title: string;
  link: any;
  component: () => {};
}

interface IAccMenu {
  [index: string]: () => {};
}

export const GENERAL_MENU = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <Legendaries />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <Documentation />,
  },
];

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
