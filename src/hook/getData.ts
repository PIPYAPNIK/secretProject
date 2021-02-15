import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import req from '../utils/request';

const useData = <T>(
  endpoint: string,
  query: object,
  featching: any,
  featchingReject: any,
  featchingReslove: any,
  deps: Array<any> = [],
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      dispatch(featching());
      try {
        const result = await req<T>(endpoint, query);
        dispatch(featchingReslove(result));
      } catch (ex) {
        dispatch(featchingReject(ex));
      }
    };
    getData();
  }, deps);
};

export default useData;
