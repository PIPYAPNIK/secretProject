import React from 'react';
// @ts-ignore
import { navigate } from 'hookrouter';
import s from './Documentation.module.scss';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

const Documentation = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading className={s.heading} headingSize={1}>
            Some about pokemons
          </Heading>

          <p>
            The legendary world of Pokémon first reached Australian and New Zealand shores in 1998 with Pokémon Red
            Version and Pokémon Blue Version for Game Boy, becoming an instant sensation that transcended fans of all
            ages and backgrounds.
          </p>
          <p>
            Since the 1996 debut of Pokémon Red and Pokémon Green for Game Boy in Japan, this iconic series has sold
            more than 279 million video games globally, with avid Aussie and Kiwi Pokémon fans continuing to grow their
            Pokémon collections.
          </p>

          <Heading className={s.heading} headingSize={2}>
            What are Pokémon?
          </Heading>

          <p>
            Pokémon are creatures of all shapes and sizes who live in the wild or alongside humans. For the most part,
            Pokémon do not speak except to utter their names. There are currently more than 700 creatures that inhabit
            the Pokémon universe.
          </p>
          <p>
            Pokémon are raised and commanded by their owners (called “Trainers”). During their adventures, Pokémon grow,
            level up and become more experienced and even, on occasion, evolve into stronger Pokémon.
          </p>
          <p>
            There are over a dozen different types of Pokémon, such as Fire type, Psychic type, and Dragon type. Every
            Pokémon type comes with both advantages as well as disadvantages when battling different Pokémon types.
          </p>
          <p>
            For instance, a Fire type Pokémon has the edge against Grass type Pokémon, but will be at a disadvantage
            against Water type Pokémon. This makes strategic thinking, positioning and use of the Pokémon in your team a
            crucial part of battles.
          </p>
          <Button onClick={(event) => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
      </Layout>
    </div>
  );
};

export default Documentation;
