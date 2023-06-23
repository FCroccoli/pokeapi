import { useContext, useEffect, useState } from "react";
import { DisplayWrapper } from "./style";
import { PokeContext } from "../contexts/pokeContext";
import { iPokemon } from "../interfaces";
import PokeListDisplay from "../components/pokeListDisplay";
import PageControllButtons from "../components/pageControlButtons";

export default function Display() {
  const { selectedPokemon, pokemonList, isLoading } = useContext(PokeContext);

  const [pokemonPage, setPokemonPage] = useState([] as iPokemon[]);

  useEffect(() => {
    if (!isLoading) {
      console.log(pokemonList);
      setPokemonPage(pokemonList.slice(0, 20));
    }
  }, [isLoading]);

  return (
    <DisplayWrapper>
      <PokeListDisplay pokeList={pokemonPage} />
      <PageControllButtons />
    </DisplayWrapper>
  );
}
