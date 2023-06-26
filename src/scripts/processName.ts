export const processName = (pokeName: string) => {
  let tempName = pokeName.split("-");
  tempName = tempName.map((word) => {
    return (word = word.charAt(0).toUpperCase() + word.slice(1));
  });
  // pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  return tempName.join(" ");
};
