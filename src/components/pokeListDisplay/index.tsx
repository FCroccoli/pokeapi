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
      {pokeList.map((pokemon, index) => {
        return (
          <PokeListItem key={index} onClick={() => selectPokeList(index + 1)}>
            <TbPokeball />
            <span>{processNumber(index + 1)}</span>
            <p>{processName(pokemon.name)}</p>
          </PokeListItem>
        );
      })}
    </PokeListUl>
  );
}
