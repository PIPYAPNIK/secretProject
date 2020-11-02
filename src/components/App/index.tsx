import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const App = () => {
  return (
    <div className={cn(s.app)}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
