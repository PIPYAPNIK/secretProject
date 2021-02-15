import Url from 'url';
import axios from 'axios';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));

  const response = await axios
    .get(uri, {
      params: {
        ...query,
      },
    })
    .then((res) => res.data);

  return response;
}

export default req;
