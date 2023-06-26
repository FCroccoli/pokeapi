import { iPokemon } from "../interfaces";

export const getStats = (pokemon: iPokemon) => {
  const tempStatus = [] as number[];
  pokemon.stats.forEach((status) => {
    tempStatus.push(status.base_stat);
  });
  return tempStatus;
};
