import { createContext, useEffect, useState } from "react";
import { iPokeList, iPokemon } from "../interfaces";
import { Api } from "../services/api";

export interface iPokeContextProps {
  children: React.ReactNode;
}

export interface iPokeContext {
  selectedPokemon: iPokemon;
  pokemonList: iPokemon[];
  isLoading: boolean;
}

export const PokeContext = createContext<iPokeContext>({} as iPokeContext);

export const PokeProvider = ({ children }: iPokeContextProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState({} as iPokemon);

  const [pokemonList, setPokemonList] = useState({} as iPokemon[]);

  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const pokeTotal = (await Api.getPokemonList(1, 0)).count;

      Api.getPokemonList(pokeTotal, 0).then((res) => {
        setPokemonList(res.results);
      });

      Api.getPokemonById(1).then((res) => {
        setSelectedPokemon(res);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PokeContext.Provider value={{ selectedPokemon, pokemonList, isLoading }}>
      {children}
    </PokeContext.Provider>
  );
};
