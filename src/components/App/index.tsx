import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from '../../routes';
import ErrorPage from '../../pages/ErrorPage';
import Header from '../Header';
import Footer from '../Footer';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
      <Footer />
    </>
  ) : (
    <ErrorPage />
  );
};

export default App;
