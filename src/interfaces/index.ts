export interface iPokeList {
  count: number;
  next?: string;
  previous?: string;
  results: iResult[];
}

interface iResult {
  name: string;
  url: string;
}

export interface iPokemon {
  name: string;
}
