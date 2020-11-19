interface IPokemonStatus {
  attack: number;
  defense: number;
  hp?: number;
  'special-attack'?: number;
  'special-defense'?: number;
  speed?: number;
}

export interface IPokemon {
  id: number;
  abilities?: Array<string>;
  base_experience?: number;
  height?: number;
  img: string;
  is_default?: boolean;
  name: string;
  name_clean?: string;
  order?: number;
  stats: IPokemonStatus;
  types: Array<string>;
  weight?: number;
}
