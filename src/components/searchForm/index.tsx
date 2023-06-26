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

  const searchPokemon = (data: EventTarget) => {
    filterPokemon(data);
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
          <button type="submit" disabled={isFiltered}>
            Search
          </button>
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
          <select name="type" id="type" defaultValue="all" disabled={true}>
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
            <option id="unova" value="5">
              Unova
            </option>
            <option id="kalos" value="6">
              Kalos
            </option>
            <option id="alola" value="7">
              Alola
            </option>
            <option id="galar" value="8">
              Galar
            </option>
            <option id="hisui" value="9">
              Hisui
            </option>
            <option id="paldea" value="10">
              Paldea
            </option>
            <option id="paldea" value="11">
              Paldea
            </option>
            <option id="paldea" value="12">
              Paldea
            </option>
            <option id="paldea" value="13">
              Paldea
            </option>
            <option id="paldea" value="14">
              Paldea
            </option>
            <option id="paldea" value="15">
              Paldea
            </option>
            <option id="paldea" value="16">
              Paldea
            </option>
            <option id="paldea" value="17">
              Paldea
            </option>
            <option id="paldea" value="18">
              Paldea
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
