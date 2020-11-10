import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import s from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <p>404</p>
      <Footer />
    </div>
  );
};

export default ErrorPage;
