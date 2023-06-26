import { useContext, useEffect, useState } from "react";
import { processName } from "../../scripts/processName";
import {
  PokeType,
  SelectedHeader,
  SelectedPokeDisplayWrapper,
  SelectedContentWrapper,
  PokeTypeWrapper,
  PokeSpriteWrapper,
  PokeInfoWrapper,
  PokeStatsWrapper,
} from "./style";
import { PokeContext } from "../../contexts/pokeContext";
import { processColor } from "../../scripts/processColor";
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";

import { Radar } from "react-chartjs-2";
import { getStats } from "../../scripts/getStats";
import { options } from "../../config/chartConfig";
import { processNumber } from "../../scripts/processNumber";
import { TbPokeball } from "react-icons/tb";
import { getEnDescription } from "../../scripts/getEnDescription";

ChartJs.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

export default function SelectedPokeDisplay() {
  const { selectedPokemon, isLoading, selectedPokemonSpecies } =
    useContext(PokeContext);

  const [pokemonStats, setPokemonStats] = useState([] as number[]);

  useEffect(() => {
    if (!isLoading) {
      setPokemonStats(getStats(selectedPokemon));
    }
  }, [isLoading, selectedPokemon]);

  return isLoading ? (
    <SelectedPokeDisplayWrapper></SelectedPokeDisplayWrapper>
  ) : (
    <SelectedPokeDisplayWrapper>
      <SelectedHeader>
        <TbPokeball />
        <span>{processNumber(selectedPokemon.id)}</span>
        <p>{processName(selectedPokemon.name)}</p>
      </SelectedHeader>
      <SelectedContentWrapper>
        <PokeInfoWrapper>
          <span>Weight: {selectedPokemon.weight / 10}kg</span>
          <span>Height: {selectedPokemon.height / 10}m</span>
          <p>
            "{getEnDescription(selectedPokemonSpecies.flavor_text_entries)}"
          </p>
        </PokeInfoWrapper>
        <PokeTypeWrapper>
          <PokeType color={processColor(selectedPokemon.types[0].type.name)}>
            {selectedPokemon.types[0].type.name.toUpperCase()}
          </PokeType>
          {selectedPokemon.types[1] && (
            <PokeType color={processColor(selectedPokemon.types[1].type.name)}>
              {selectedPokemon.types[1].type.name.toUpperCase()}
            </PokeType>
          )}
        </PokeTypeWrapper>
        <PokeSpriteWrapper>
          <img src={selectedPokemon.sprites.front_default} alt="" />
        </PokeSpriteWrapper>
      </SelectedContentWrapper>
      <PokeStatsWrapper>
        <Radar
          data={{
            labels: ["HP", "Att", "Def", "Sp. Att.", "Sp. Def.", "Spd"],
            datasets: [
              {
                label: "Stats",
                data: pokemonStats,
                backgroundColor: "rgba(0, 255, 0, 0.8)",
                borderColor: "transparent",
                pointRadius: 0,
              },
            ],
          }}
          options={options}
        ></Radar>
      </PokeStatsWrapper>
    </SelectedPokeDisplayWrapper>
  );
}
