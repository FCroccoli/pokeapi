import { createContext, useEffect, useState } from "react";
import { iPokeIndex, iPokemon, iPokemonSpecies } from "../interfaces";
import { Api } from "../services/api";

export interface iPokeContextProps {
  children: React.ReactNode;
}

export interface iPokeContext {
  selectedPokemon: iPokemon;
  pokemonList: iPokeIndex[];
  isLoading: boolean;
  selectedPokemonSpecies: iPokemonSpecies;
  selectPokeList: (pokeId: number) => void;
}

export const PokeContext = createContext<iPokeContext>({} as iPokeContext);

export const PokeProvider = ({ children }: iPokeContextProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState({} as iPokemon);

  const [selectedPokemonSpecies, setSelectedPokemonSpecies] = useState(
    {} as iPokemonSpecies
  );

  const [pokemonList, setPokemonList] = useState({} as iPokeIndex[]);

  const [isLoading, setIsLoading] = useState(true);
  const [isPokemonLoading, setPokemonIsLoading] = useState(true);
  const [isSpeciesLoading, setSpeciesIsLoading] = useState(true);
  const [isListLoading, setListIsLoading] = useState(true);

  const getData = async () => {
    try {
      const pokeTotal = (await Api.getPokemonList(1, 0)).count;

      Api.getPokemonList(pokeTotal, 0).then((res) => {
        setPokemonList(res.results);
        setListIsLoading(false);
      });

      Api.getPokemonById(149).then((res) => {
        setSelectedPokemon(res);
        setPokemonIsLoading(false);
      });

      Api.getPokemonSpeciesById(149).then((res) => {
        setSelectedPokemonSpecies(res);
        setSpeciesIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const selectPokeList = async (pokeId: number) => {
    setSpeciesIsLoading(true);
    setPokemonIsLoading(true);
    Api.getPokemonById(pokeId).then((res) => {
      setSelectedPokemon(res);
      setPokemonIsLoading(false);
    });

    Api.getPokemonSpeciesById(pokeId).then((res) => {
      setSelectedPokemonSpecies(res);
      setSpeciesIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!isSpeciesLoading && !isPokemonLoading && !isListLoading) {
      setIsLoading(false);
    }
  }, [isSpeciesLoading, isPokemonLoading, isListLoading]);

  return (
    <PokeContext.Provider
      value={{
        selectedPokemon,
        pokemonList,
        isLoading,
        selectedPokemonSpecies,
        selectPokeList,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
