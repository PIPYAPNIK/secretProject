import React from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';
import { LinkEnum } from '../../routes';
import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading className={s.heading} headingSize={1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={(event) => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
