import { useContext, useEffect, useState } from "react";
import { DisplayWrapper, PageWrapper } from "./style";
import { PokeContext } from "../contexts/pokeContext";
import { iPokeIndex } from "../interfaces";
import PokeListDisplay from "../components/pokeListDisplay";
import PageControllButtons from "../components/pageControlButtons";
import SelectedPokeDisplay from "../components/selectedDisplay";

export default function Display() {
  const { selectedPokemon, pokemonList, isLoading } = useContext(PokeContext);

  const [pokemonPage, setPokemonPage] = useState([] as iPokeIndex[]);

  useEffect(() => {
    if (!isLoading) {
      setPokemonPage(pokemonList.slice(0, 20));
    }
  }, [isLoading]);

  return (
    <DisplayWrapper>
      <PageWrapper>
        <PokeListDisplay pokeList={pokemonPage} />
        <PageControllButtons />
      </PageWrapper>
      <SelectedPokeDisplay />
    </DisplayWrapper>
  );
}
