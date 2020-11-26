import React, { useState } from 'react';
import s from './Pokedex.module.scss';
import PokemonCardList from '../../components/PokemonCardList';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import useData from '../../hook/getData';
import { PokemonsReques } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  name?: string;
  limit: number;
}

const Pokedex = () => {
  const [searchValue, setSaerchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12,
  });

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<PokemonsReques>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaerchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: searchValue,
    }));
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
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
      </Layout>
      <PokemonCardList pokemons={!isLoading && data && data.pokemons} />
    </div>
  );
};

export default Pokedex;
