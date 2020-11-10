import React from 'react';
import cn from 'classnames';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import s from './App.module.scss';
import HomePage from '../../pages/Home';
import Pokedex from '../../pages/Pokedex';

const App = () => {
  return (
    <div className={cn(s.app)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
