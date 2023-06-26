export const processSearch = (input: string) => {
  const output = input
    .toLocaleLowerCase()
    .normalize("NFD")
    .split(" ")
    .join("-")
    .replace(/[\u0300-\u036f]/g, "");
  return output;
};
