import React, { useState } from 'react';
import s from './Pokedex.module.scss';
import PokemonCardList from '../../components/PokemonCardList';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import useData from '../../hook/getData';

const Pokedex = () => {
  const [searchValue, setSaerchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaerchValue(e.target.value);
    setQuery({
      name: searchValue,
    });
  };

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
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
      </Layout>
      <PokemonCardList pokemons={data.pokemons} />
    </div>
  );
};

export default Pokedex;
