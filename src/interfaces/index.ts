export interface iPokeList {
  count: number;
  next?: string;
  previous?: string;
  results: iPokeIndex[];
}

export interface iPokeIndex {
  name: string;
  url: string;
}

export interface iPokemon {
  name: string;
  types: { slot: number; type: iType }[];
  sprites: { front_default: string };
  stats: iStat[];
  height: number;
  weight: number;
  id: number;
}

interface iType {
  name: string;
  url: string;
}

interface iStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface iPokemonSpecies {
  name: string;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  flavor_text_entries: iFlavorText[];
}

export interface iFlavorText {
  flavor_text: string;
  language: { name: string };
}

export interface iSearchInput {
  name: string;
}

export interface iPokedex {
  pokemon_entries: iPokeIndex[];
}

export interface iTypeResponse {
  name: string;
  pokemon: iPokeIndex[];
}
