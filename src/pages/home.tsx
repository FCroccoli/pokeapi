import { useContext, useEffect, useState } from "react";
import { DisplayWrapper, PageWrapper } from "./style";
import { PokeContext } from "../contexts/pokeContext";
import { iPokeIndex } from "../interfaces";
import PokeListDisplay from "../components/pokeListDisplay";
import PageControllButtons from "../components/pageControlButtons";
import SelectedPokeDisplay from "../components/selectedDisplay";
import SearchForm from "../components/searchForm";

export default function Display() {
  const {
    pokemonList,
    isLoading,
    currentPage,
    isFiltered,
    filteredPokemonList,
  } = useContext(PokeContext);

  const [pokemonPage, setPokemonPage] = useState([] as iPokeIndex[]);

  useEffect(() => {
    if (!isLoading && isFiltered) {
      setPokemonPage(
        filteredPokemonList.slice(20 * (currentPage - 1), 20 * currentPage)
      );
    } else if (!isLoading) {
      setPokemonPage(
        pokemonList.slice(20 * (currentPage - 1), 20 * currentPage)
      );
    }
  }, [isLoading, currentPage, isFiltered]);

  return (
    <DisplayWrapper>
      <SearchForm />
      <PageWrapper>
        <PokeListDisplay pokeList={pokemonPage} />
        <PageControllButtons />
      </PageWrapper>
      <SelectedPokeDisplay />
    </DisplayWrapper>
  );
}
