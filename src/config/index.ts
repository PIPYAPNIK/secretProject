export const config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        metod: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemon: {
        metod: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
    },
  },
};

export default config;
