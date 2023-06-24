import { iPokemon } from "../../interfaces";
import { processNumber } from "../../scripts/processNumber";
import { PokeListItem, PokeListUl } from "./style";
import { TbPokeball } from "react-icons/tb";

interface iPokeListDisplayProps {
  pokeList: iPokemon[];
}

export default function PokeListDisplay({ pokeList }: iPokeListDisplayProps) {
  return (
    <PokeListUl>
      {pokeList.map((pokemon, index) => {
        return (
          <PokeListItem key={index}>
            <TbPokeball />
            <span>{processNumber(index + 1)}</span>
            <p>
              {pokemon.name.charAt(0).toUpperCase()}
              {pokemon.name.slice(1)}
            </p>
          </PokeListItem>
        );
      })}
    </PokeListUl>
  );
}
