import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
import PokemonCardList from '../../components/PokemonCardList';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';

interface IUsePokemons {
  data: {
    total: number;
    pokemons: Array<object>;
  };
  isLoading: boolean;
  isError: boolean;
}

const usePokemons = (): IUsePokemons => {
  const [data, setData] = useState({ pokemons: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();
        setData(result);
      } catch (ex) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading headingSize={1}>
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
      </Layout>
      <PokemonCardList pokemons={data.pokemons} />
    </div>
  );
};

export default Pokedex;
