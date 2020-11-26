import { useEffect, useState } from 'react';
import req from '../utils/request';

interface IUsePokemons {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const useData = <T>(endpoint: string, query: object, deps: Array<any> = []): IUsePokemons => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await req<T>(endpoint, query);

        setData(result);
      } catch (ex) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
