import { createContext, useEffect, useState } from "react";
import {
  iPokeIndex,
  iPokemon,
  iPokemonSpecies,
  iSearchInput,
} from "../interfaces";
import { Api } from "../services/api";
import { calculatePages } from "../scripts/calculatePages";
import { set } from "react-hook-form";
import { processSearch } from "../scripts/processSearch";

export interface iPokeContextProps {
  children: React.ReactNode;
}

export interface iPokeContext {
  selectedPokemon: iPokemon;
  pokemonList: iPokeIndex[];
  isLoading: boolean;
  selectedPokemonSpecies: iPokemonSpecies;
  selectPokeList: (pokeId: number) => void;
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isFiltered: boolean;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  filteredPokemonList: iPokeIndex[];
  filterPokemon: (data: EventTarget) => void;
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
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredPokemonList, setFilteredPokemonList] = useState(
    {} as iPokeIndex[]
  );

  const getData = async () => {
    try {
      const pokeTotal = (await Api.getPokemonList(1, 0)).count;

      Api.getPokemonList(pokeTotal, 0).then((res) => {
        setPokemonList(res.results);
        setListIsLoading(false);
      });

      setTotalPages(calculatePages(pokeTotal));

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

  const filterPokemon = async (data: EventTarget) => {
    let outputList = pokemonList.filter((pokemon) => {
      return pokemon.name.includes(processSearch(data[0].value));
    });
    // if (data[3].value != "all") {
    //   const regionPokemon = await Api.getRegionByName(data[3].value);
    //   console.log(regionPokemon.pokemon_entries);
    //   outputList = regionPokemon.pokemon_entries.filter((pokemon) => {
    //     return outputList.includes(pokemon);
    //   });
    // }
    if (data[5].value != "all") {
      await Api.getTypeById(parseInt(data[5].value)).then((res) => {
        outputList = res.pokemon.filter((pokemon) => {
          return outputList.includes(pokemon.pokemon);
        });
        console.log(outputList);
      });
    }
    setFilteredPokemonList(outputList);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filteredPokemonList.length > 0) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [filteredPokemonList]);

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
        totalPages,
        currentPage,
        setCurrentPage,
        isFiltered,
        setIsFiltered,
        filteredPokemonList,
        filterPokemon,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
