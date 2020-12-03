import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries';
import Documentation from './pages/Documentation';
import Pokemon, { IPokemonPage } from './pages/Pokemon';

interface IMenu {
  title: string;
  link: any;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

interface IAccMenu {
  [index: string]: (props: PropsWithChildren<any>) => {};
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <Legendaries />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <Documentation />,
  },
];

const SECOND_ROUTES: IMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: IPokemonPage) => <Pokemon id={id} />,
  },
];

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
