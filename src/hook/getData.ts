import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import req from '../utils/request';
import { featchPokemons, featchPokemonsReject, featchPokemonsResolve } from '../store/pokemonsSlice';

const useData = <T>(endpoint: string, query: object, deps: Array<any> = []) => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state: any) => state.pokemons);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      dispatch(featchPokemons());
      try {
        const result = await req<T>(endpoint, query);
        dispatch(featchPokemonsResolve(result));
      } catch (ex) {
        dispatch(featchPokemonsReject(ex));
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoading,
    error,
  };
};

export default useData;
