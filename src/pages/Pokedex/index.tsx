import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
import PokemonCardList from '../../components/PokemonCardList';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Loader from '../../components/Loader';
import useData from '../../hook/getData';
import { PokemonsReques } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import Pagination from '../../components/Pagination';
import { useSelector } from 'react-redux';
import { featchPokemons, featchPokemonsReject, featchPokemonsResolve } from '../../store/pokemonsSlice';
import { featchTypes, featchTypesReject, featchTypesResolve } from '../../store/typesSlice';

interface IQuery {
  name?: string;
  limit: number;
  offset: number;
}

const limit = 9;

const Pokedex = () => {
  const [searchValue, setSaerchValue] = useState('');
  const [offset, setOffset] = useState<number>(0);
  const [query, setQuery] = useState<IQuery>({
    limit,
    offset: offset,
  });
  const debouncedValue = useDebounce(searchValue, 500);
  useData<PokemonsReques>('getPokemons', query, [query], featchPokemons, featchPokemonsReject, featchPokemonsResolve);
  useData('getTypes', {}, [], featchTypes, featchTypesReject, featchTypesResolve);
  const { isLoadingPokemons, dataPokemons, errorPokemons } = useSelector((state: any) => state.pokemons);
  const { isLoadingTypes, dataTypes, errorTypes } = useSelector((state: any) => state.types);
  const totalPages = Math.ceil(dataPokemons.total / limit);
  const [currentPage, setCurrentPage] = useState<number>(1);

  console.log(dataTypes);

  useEffect(() => {
    setQuery((state: IQuery) => ({
      ...state,
      offset: offset,
    }));
  }, [offset]);

  useEffect(() => {
    setQuery((state: IQuery) => ({
      ...state,
      name: searchValue,
    }));
    setCurrentPage(1);
  }, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaerchValue(e.target.value);
  };

  if (isLoadingPokemons) {
    return <Loader />;
  }

  if (errorPokemons != null) {
    return <div>Error...</div>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading headingSize={1} className={s['pokedex-title']}>
          {!isLoadingPokemons && dataPokemons && dataPokemons.total} <b>Pokemons</b> for you to choose your favorite
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
        <PokemonCardList pokemons={!isLoadingPokemons && dataPokemons && dataPokemons.pokemons} />
        <Pagination
          offset={offset}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          limit={limit}
        />
      </Layout>
    </div>
  );
};

export default Pokedex;
