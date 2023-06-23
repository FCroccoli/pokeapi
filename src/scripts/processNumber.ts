export const processNumber = (pokeNumber: number) => {
  let tempNumber = pokeNumber.toString();
  let strSize = tempNumber.length;
  while (strSize < 4) {
    tempNumber = 0 + tempNumber;
    strSize = tempNumber.length;
  }
  return tempNumber;
};
