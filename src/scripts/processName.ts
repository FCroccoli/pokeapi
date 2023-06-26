export const processName = (pokeName: string) => {
  const tempName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  return tempName;
};
