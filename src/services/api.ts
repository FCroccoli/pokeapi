import axios from "axios";
import { iPokeList, iPokemon } from "../interfaces";

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

  static getPokemonById = async (id: number): Promise<iPokemon> => {
    const response = await this.api.get<iPokemon>(`pokemon-species/${id}`);
    return response.data;
  };
}