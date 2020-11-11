import React from 'react';
import s from './Pokedex.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PokemonCardList from '../../components/PokemonCardList';

const Pokedex = () => {
  return (
    <div className={s.root}>
      <Header />
      <PokemonCardList />
      <Footer />
    </div>
  );
};

export default Pokedex;
