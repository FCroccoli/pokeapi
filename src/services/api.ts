import axios from "axios";
import {
  iPokeList,
  iPokedex,
  iPokemon,
  iPokemonSpecies,
  iTypeResponse,
} from "../interfaces";

export class Api {
  static api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  static getPokemonList = async (
    limit: number,
    offset: number
  ): Promise<iPokeList> => {
    const response = await this.api.get<iPokeList>(
      `pokemon-species?limit=${limit}offset=${offset}`
    );
    return response.data;
  };

  static getPokemonSpeciesById = async (
    id: number
  ): Promise<iPokemonSpecies> => {
    const response = await this.api.get<iPokemonSpecies>(
      `pokemon-species/${id}`
    );
    return response.data;
  };

  static getPokemonById = async (id: number): Promise<iPokemon> => {
    const response = await this.api.get<iPokemon>(`pokemon/${id}`);
    return response.data;
  };

  static getRegionByName = async (name: string): Promise<iPokedex> => {
    const response = await this.api.get<iPokedex>(`pokedex/${name}`);
    return response.data;
  };

  static getTypeById = async (id: number): Promise<iTypeResponse> => {
    const response = await this.api.get<iTypeResponse>(`type/${id}`);
    return response.data;
  };
}
