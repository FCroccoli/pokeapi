import { useContext } from "react";
import { iPokeIndex } from "../../interfaces";
import { processName } from "../../scripts/processName";
import { processNumber } from "../../scripts/processNumber";
import { PokeListItem, PokeListUl } from "./style";
import { TbPokeball } from "react-icons/tb";
import { PokeContext } from "../../contexts/pokeContext";

interface iPokeListDisplayProps {
  pokeList: iPokeIndex[];
}

export default function PokeListDisplay({ pokeList }: iPokeListDisplayProps) {
  const { selectPokeList } = useContext(PokeContext);
  return (
    <PokeListUl>
      {pokeList.length > 0 ? (
        pokeList.map((pokemon) => {
          const pokeId = parseInt(pokemon.url.split("/")[6]);
          return (
            <PokeListItem
              key={pokemon.url}
              onClick={() => selectPokeList(pokeId)}
            >
              <TbPokeball />
              <span>{processNumber(pokeId)}</span>
              <p>{processName(pokemon.name)}</p>
            </PokeListItem>
          );
        })
      ) : (
        <p>No results found</p>
      )}
    </PokeListUl>
  );
}
