import { iPokemon } from "../../interfaces";
import { processNumber } from "../../scripts/processNumber";
import { PokeListItem, PokeListUl } from "./style";

interface iPokeListDisplayProps {
  pokeList: iPokemon[];
}

export default function PokeListDisplay({ pokeList }: iPokeListDisplayProps) {
  return (
    <PokeListUl>
      {pokeList.map((pokemon, index) => {
        return (
          <PokeListItem>
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
