import React, { useState } from 'react';
import s from './Legendaries.module.scss';
import { useSelector } from 'react-redux';
import useData from '../../hook/getData';
import cn from 'classnames';
import { PokemonsReques } from '../../interface/pokemons';
import { featchPokemons, featchPokemonsReject, featchPokemonsResolve } from '../../store/pokemonsSlice';
import { featchTypes, featchTypesReject, featchTypesResolve } from '../../store/typesSlice';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import PokemonsSlider from '../../components/PokemonsSlider';

interface IQuery {
  name?: string;
  limit: number;
  types?: string;
}

const limit = 2000;

const Legendaries = () => {
  const [query, setQuery] = useState<IQuery>({
    limit,
    types: '',
    name: '',
  });
  const { isLoadingPokemons, dataPokemons, errorPokemons } = useSelector((state: any) => state.pokemons);
  const { isLoadingTypes, dataTypes, errorTypes } = useSelector((state: any) => state.types);

  useData<PokemonsReques>('getPokemons', query, featchPokemons, featchPokemonsReject, featchPokemonsResolve, [query]);
  useData('getTypes', {}, featchTypes, featchTypesReject, featchTypesResolve, []);

  if (isLoadingPokemons || isLoadingTypes) {
    return <Loader />;
  }

  if (errorPokemons != null || errorTypes != null) {
    return <div>Error...</div>;
  }

  return (
    <section className={s.root}>
      <Layout>
        {dataTypes.map((el: string, i: number) => {
          return <PokemonsSlider title={el} pokemons={dataPokemons.pokemons} />;
        })}
      </Layout>
    </section>
  );
};

export default Legendaries;
