import React from 'react';
import s from './Pokedex.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Pokedex = () => {
  return (
    <div className={s.root}>
      <Header />
      <p>Страница с покемонами</p>
      <Footer />
    </div>
  );
};

export default Pokedex;
