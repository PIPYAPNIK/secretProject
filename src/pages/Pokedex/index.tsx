import React, { useState } from 'react';
import s from './Pokedex.module.scss';
import PokemonCardList from '../../components/PokemonCardList';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Loader from '../../components/Loader';
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
    limit: 9,
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
    return <Loader />;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading headingSize={1} className={s['pokedex-title']}>
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s['pokemons-search']}>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            className={s['search-bar']}
            placeholder="Encuentra tu pokémon..."
          />
        </div>
      </Layout>
      <PokemonCardList pokemons={!isLoading && data && data.pokemons} />
    </div>
  );
};

export default Pokedex;
