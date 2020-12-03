export interface IPokemons {
  total: number;
  pokemons: PokemonsReques[];
}

const pokemonsData = {
  abilities: ['overgrow', 'chlorophyll'],
  base_experience: 64,
  height: 7,
  id: 1,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  is_default: true,
  name: 'bulbasaur',
  name_clean: 'bulbasaur',
  order: 1,
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    'special-attack': 65,
    'special-defense': 65,
    speed: 45,
  },
  types: ['grass', 'poison'],
  weight: 69,
};

export type PokemonsReques = typeof pokemonsData;
