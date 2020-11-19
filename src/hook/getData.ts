import { useEffect, useState } from 'react';
import req from '../utils/request';
import { IPokemon } from '../pokemonType';

interface IUsePokemons {
  data: {
    total: number;
    pokemons: Array<IPokemon>;
  };
  isLoading: boolean;
  isError: boolean;
}

const useData = (endpoint: string, query: object, deps: Array<any> = []): IUsePokemons => {
  const [data, setData] = useState({ pokemons: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint, query);

        setData(result);
      } catch (ex) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [...deps]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
