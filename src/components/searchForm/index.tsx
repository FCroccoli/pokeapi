import {
  ClearButton,
  FilterWrapper,
  SearchBarContainer,
  SearchWrapper,
} from "./style";
import { useContext } from "react";
import { PokeContext } from "../../contexts/pokeContext";

export default function SearchForm() {
  const { filterPokemon, setIsFiltered, isFiltered } = useContext(PokeContext);

  const searchPokemon = async (data: EventTarget) => {
    await filterPokemon(data);
    setIsFiltered(true);
  };

  return (
    <SearchWrapper
      onSubmit={(event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        searchPokemon(event.target);
      }}
    >
      <form action="">
        <SearchBarContainer>
          <input type="text" placeholder="Pokemon name" />
          <button type="submit">Search</button>
        </SearchBarContainer>

        <FilterWrapper>
          <label htmlFor="region">Region</label>
          <select name="region" id="region" disabled={true} defaultValue="all">
            <option id="all" value="all">
              All
            </option>
            <option id="kanto" value="kanto">
              Kanto
            </option>
            <option id="johto" value="original-johto">
              Johto
            </option>
            <option id="hoenn" value="hoenn">
              Hoenn
            </option>
            <option id="sinnoh" value="original-sinnoh">
              Sinnoh
            </option>
            <option id="unova" value="original-unova">
              Unova
            </option>
            <option id="kalos" value="original-kalos">
              Kalos
            </option>
            <option id="alola" value="original-alola">
              Alola
            </option>
            <option id="galar" value="original-galar">
              Galar
            </option>
            <option id="hisui" value="original-hisui">
              Hisui
            </option>
            <option id="paldea" value="original-paldea">
              Paldea
            </option>
          </select>
        </FilterWrapper>
        <FilterWrapper>
          <label htmlFor="type">Type</label>
          <select name="type" id="type" defaultValue="all">
            <option id="all" value="all">
              All
            </option>
            <option id="normal" value="1">
              Normal
            </option>
            <option id="fighting" value="2">
              Fighting
            </option>
            <option id="flying" value="3">
              Flying
            </option>
            <option id="poison" value="4">
              Poison
            </option>
            <option id="ground" value="5">
              Ground
            </option>
            <option id="rock" value="6">
              Rock
            </option>
            <option id="bug" value="7">
              Bug
            </option>
            <option id="ghost" value="8">
              Ghost
            </option>
            <option id="steel" value="9">
              Steel
            </option>
            <option id="fire" value="10">
              Fire
            </option>
            <option id="water" value="11">
              Water
            </option>
            <option id="grass" value="12">
              Grass
            </option>
            <option id="electric" value="13">
              Electric
            </option>
            <option id="psychihc" value="14">
              Psychihc
            </option>
            <option id="ice" value="15">
              Ice
            </option>
            <option id="dragon" value="16">
              Dragon
            </option>
            <option id="dark" value="17">
              Dark
            </option>
            <option id="fairy" value="18">
              Fairy
            </option>
          </select>
        </FilterWrapper>
      </form>
      <ClearButton onClick={() => setIsFiltered(false)} disabled={!isFiltered}>
        Clear search
      </ClearButton>
    </SearchWrapper>
  );
}
