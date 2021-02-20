import React, { useEffect, useState, useRef } from 'react';
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
import { changeActiveType } from '../../store/localSlice';
import PopUpCard from '../../components/PopUpCard';
import { IPokemonItem } from '../../components/PokemonCard';
import cn from 'classnames';
import FiltersBlock from '../../components/FiltersBlock';

interface IQuery {
  name?: string;
  limit: number;
  offset: number;
  types?: string;
}

const limit = 9;

const Pokedex = () => {
  const [searchValue, setSaerchValue] = useState('');
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPokemon, setCurrentPokemon] = useState<IPokemonItem | object>({});
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const { isLoadingPokemons, dataPokemons, errorPokemons } = useSelector((state: any) => state.pokemons);
  const { isLoadingTypes, dataTypes, errorTypes } = useSelector((state: any) => state.types);
  const { activeType } = useSelector((state: any) => state.local);

  const [query, setQuery] = useState<IQuery>({
    limit,
    offset: offset,
    types: activeType,
    name: '',
  });

  const debouncedValue = useDebounce(searchValue, 500);
  const totalPages = Math.ceil(dataPokemons.total / limit);

  useData<PokemonsReques>('getPokemons', query, featchPokemons, featchPokemonsReject, featchPokemonsResolve, [query]);
  useData('getTypes', {}, featchTypes, featchTypesReject, featchTypesResolve, []);

  useEffect(() => {
    setQuery((state: IQuery) => ({
      ...state,
      offset: offset,
    }));
    setIsPopUpOpen(false);
  }, [offset]);

  useEffect(() => {
    setQuery((state: IQuery) => ({
      ...state,
      name: searchValue,
    }));
    setCurrentPage(1);
    setIsPopUpOpen(false);
  }, [debouncedValue]);

  useEffect(() => {
    setQuery((state: IQuery) => ({
      ...state,
      types: activeType,
    }));
    setIsPopUpOpen(false);
  }, [activeType]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaerchValue(e.target.value);
  };

  if (isLoadingPokemons || isLoadingTypes) {
    return <Loader />;
  }

  if (errorPokemons != null || errorTypes != null) {
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
        <FiltersBlock
          selectName={'Types'}
          selectItems={dataTypes}
          activeType={activeType}
          setActiveType={changeActiveType}
        />
        <PokemonCardList
          pokemons={!isLoadingPokemons && dataPokemons && dataPokemons.pokemons}
          setCurrentPokemon={setCurrentPokemon}
          setIsPopUpOpen={setIsPopUpOpen}
        />
        <PopUpCard pokemon={currentPokemon} isOpen={isPopUpOpen} setIsPopUpOpen={setIsPopUpOpen} />
        <Pagination
          offset={offset}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          limit={limit}
        />
        <div
          className={cn(s.overlay, {
            [s.active]: isPopUpOpen,
          })}></div>
      </Layout>
    </div>
  );
};

export default Pokedex;
